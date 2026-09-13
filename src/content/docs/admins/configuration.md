---
title: Configuration
description: Every config file the Vector Point mods read, with keys and defaults.
sidebar:
  order: 2
---

All config files live under `config/vector-point/` in the game or server folder. Each
is created with its defaults the first time the mod runs.

## Pixel Maps

`config/vector-point/pixelmaps.toml`, on the server. A single world can override it by
putting a copy at `<world>/serverconfig/vector-point/pixelmaps.toml`.

### `[server]`

| Key | Default | What it does |
| :--- | :--- | :--- |
| `enabled` | `true` | Turns the map off entirely when `false` |
| `allowIntegratedServer` | `true` | Also runs behind singleplayer and LAN worlds |
| `bindAddress` | `"0.0.0.0"` | Network interface the web server listens on. Use `"127.0.0.1"` behind a reverse proxy |
| `port` | `8123` | Web server port, 1 to 65535 |
| `publicUrl` | `""` | The address players are given. Blank builds one from the port |
| `categories` | `["Restaurants", "Camps", "Fun", "Banks", "Shops"]` | The tags a world starts with. Only read the first time a world runs; after that the tag list lives in `<world>/pixelmaps/data/tags.json` |

### `[render]`

| Key | Default | What it does |
| :--- | :--- | :--- |
| `chunksPerSecond` | `64` | How many chunks are turned into tiles per second, 1 to 4096 |
| `zoomLevels` | `6` | Zoomed-out tile levels above the native one, 1 to 12 |
| `renderOnChunkLoad` | `true` | Draw a chunk whenever it loads |
| `liveBlockUpdates` | `true` | Redraw a chunk when somebody builds in it |
| `chunkCooldownSeconds` | `20` | How long a chunk waits before it may be drawn again, 0 to 3600. Changes are held, never dropped |
| `backfillOnStart` | `false` | Redraw every generated chunk from disk on every start. `/vp map rebuild` does the same on demand |
| `biomeTint` | `true` | Colour grass, leaves and water by biome |
| `contours` | `true` | Draw contour banding |
| `contourInterval` | `8` | Blocks of height between contour lines, 1 to 64 |
| `contourStrength` | `0.30` | How much a contour line darkens the pixel under it, 0.0 to 1.0 |

Operators can change most of `[render]` from the map itself, under **Settings, Map
rendering**, and the change is written back to this file. The bind address, port and
zoom levels are only in the file, because they cannot change while the web server is
running.

## Chat

`config/vector-point/chat.toml`, on each player's own game.

| Key | Default | What it does |
| :--- | :--- | :--- |
| `style` | `"TOWER"` | `TOWER` is the tabbed chat window, `VANILLA` leaves Minecraft's chat alone |

The window's size and opacity follow Minecraft's own chat settings.

## Menu

`config/vector-point/menu.toml`, on each player's own game. Part of `vp-network`.

| Key | Default | What it does |
| :--- | :--- | :--- |
| `registerPlaceholders` | `true` | Gives FancyMenu layouts the [Vector Point placeholders](/reference/fancymenu/) |
| `useCustomMenu` | `true` | Reserved for the Vector Point menu layout. Has no effect yet |

## Network services

`config/vector-point/agc.toml` and `config/vector-point/friends.toml` belong to the
coordinator service and the friends list, which are not running yet. Leave them at
their defaults. Setting `enabled = false` under `[agc]` stops the mod from trying to
connect.
