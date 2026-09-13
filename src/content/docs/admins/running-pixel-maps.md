---
title: Running Pixel Maps
description: Installing the map on a server, filling it in, and putting it behind a domain.
sidebar:
  order: 1
---

## Install

Put `vp-pixelmaps` and `vp-network` in the server's `mods/` folder and start it. The
map starts its own small web server inside the Minecraft process, on port `8123` on
every network interface. There is no separate web server and no database to set up.

Players see the link in chat when they join, and `/vp map` prints it again.

Pixel Maps also runs behind singleplayer and LAN worlds, which is handy for trying it
out. To keep it to dedicated servers only, set `allowIntegratedServer = false` in the
[config](/admins/configuration/).

## Filling in the map

A new install draws chunks as they load, so the map grows as people explore. For a
world that already exists:

1. Run `/vp map rebuild`. It reads every region file straight off the disk without
   loading any chunks, on its own thread, and draws the map from them. On a large
   world this takes minutes; progress goes to the server log.
2. Run `/vp map pyramid` once it finishes. That builds the zoomed-out tiles, so
   zooming out stays fast.

After that the map keeps itself up to date:

- Chunks are drawn when they load, and redrawn when someone builds in them
  (`liveBlockUpdates`). A chunk waits `chunkCooldownSeconds` before it is drawn again;
  nothing is lost in the wait.
- Pre-generating the world with a mod like Chunky is fine. If chunks arrive faster than
  the map can draw them, it notes which regions it missed and catches up from disk in
  the background, across restarts. `/vp map status` shows what is still owed.
- Machines and growing trees are not tracked. They show up the next time that chunk
  loads.

### Blocks from other mods

A block's colour comes from, in order: your override, the block's own map colour, then
the average of its texture if it is a full solid cube. Anything else is treated as
see-through and the ground under it is drawn.

Blocks that end up with no colour are listed in
`<world>/pixelmaps/colors.unresolved.json`, already in the format of the override
file. Copy the ones you want into `<world>/pixelmaps/colors.json` with a hex colour.
Colours are worked out when the server starts, so restart it, then run
`/vp map rebuild` to redraw the map with them.

## Putting it behind a domain

Serving the map straight off port 8123 works, but a reverse proxy gives you HTTPS and
a clean address. Tell the map it is behind one in `config/vector-point/pixelmaps.toml`:

```toml
[server]
bindAddress = "127.0.0.1"
publicUrl = "https://map.example.com"
```

`bindAddress` keeps the port off the public internet, and `publicUrl` is what the
join message and `/vp map` hand out.

:::caution
If the server runs in a container with host networking, anything bound to `0.0.0.0`
is reachable from outside. Bind to `127.0.0.1` and let the proxy face the internet.
:::

An nginx server block for it:

```nginx
server {
    listen 443 ssl;
    server_name map.example.com;

    ssl_certificate     /etc/letsencrypt/live/map.example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/map.example.com/privkey.pem;

    # Panorama faces and photo uploads run past nginx's 1m default.
    client_max_body_size 16m;

    location / {
        proxy_pass http://127.0.0.1:8123;
        proxy_set_header Host $host;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

When the Minecraft server is down, the map is down with it, and visitors get nginx's
own error page. To show something friendlier, point `error_page 502 503 504` at a
static page on the proxy. That page has to carry its own styles and images inline,
since there is nothing running to fetch them from.
