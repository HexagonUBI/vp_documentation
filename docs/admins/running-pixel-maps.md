---
description: Installing Pixel Maps on a server, filling in the map, and putting it behind a domain.
---

# Running Pixel Maps

## Install

Put `vp-pixelmaps` and `vp-network` in the server's `mods/` folder and start the server. Pixel Maps runs a small web server inside the Minecraft process, listening on port `8123` on every network interface. You do not need a separate web server or a database.

Players get the map link in chat when they join, and `/vp map` prints it again.

Pixel Maps also runs in singleplayer and LAN worlds, which is handy for trying it out. To limit it to dedicated servers, set `allowIntegratedServer = false` in the [config](/admins/configuration).

## Filling in the map

A new install draws chunks as they load, so the map grows as people explore. For a world that already exists:

1. Run `/vp map rebuild`. It reads every region file from disk on its own thread, without loading chunks, and draws the map from them. A large world takes minutes, and progress goes to the server log.
2. When the rebuild finishes, run `/vp map pyramid` to build the zoomed-out tiles.

After that the map keeps up with the world by itself.

- Chunks are drawn when they load and redrawn when someone builds in them, if `liveBlockUpdates` is on. A chunk waits `chunkCooldownSeconds` before it can be drawn again, and changes made during the wait are kept for the next draw.
- Pre-generating the world with a mod such as Chunky is fine. When chunks arrive faster than the map can draw them, Pixel Maps records the regions it missed and reads them back from disk in the background, even after a restart. `/vp map status` shows how many are left.
- Machines and growing trees are not tracked. They appear the next time their chunk loads.

### Blocks from other mods

A block's map colour comes from the first of these that exists:

1. Your override in `<world>/pixelmaps/colors.json`.
2. The block's own map colour.
3. The average colour of its texture, if the block is a full solid cube.

A block with none of these is treated as see-through, and the ground under it is drawn instead.

Pixel Maps lists blocks that got no colour in `<world>/pixelmaps/colors.unresolved.json`, already in the format of the override file. Copy the entries you want into `colors.json` and give each a hex colour. Colours are worked out at startup, so restart the server, then run `/vp map rebuild` to redraw the map.

## Putting it behind a domain

The map works when served straight from port 8123. A reverse proxy in front of it adds HTTPS and a normal web address. Tell Pixel Maps about the proxy in `config/vector-point/pixelmaps.toml`:

```toml
[server]
bindAddress = "127.0.0.1"
publicUrl = "https://map.example.com"
```

`bindAddress` keeps port 8123 off the public internet, and `publicUrl` is the address that the join message and `/vp map` give out.

::: warning
If the server runs in a container with host networking, anything bound to `0.0.0.0` can be reached from the internet. Bind to `127.0.0.1` and let the proxy face the internet.
:::

An nginx server block for the map:

```nginx
server {
    listen 443 ssl;
    server_name map.example.com;

    ssl_certificate     /etc/letsencrypt/live/map.example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/map.example.com/privkey.pem;

    # Panorama faces and photo uploads are larger than nginx's 1m default.
    client_max_body_size 16m;

    location / {
        proxy_pass http://127.0.0.1:8123;
        proxy_set_header Host $host;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

When the Minecraft server is down, the map goes down with it and visitors see nginx's error page. You can point `error_page 502 503 504` at a static page on the proxy instead. Put that page's styles and images inline, because nothing is running to serve them.
