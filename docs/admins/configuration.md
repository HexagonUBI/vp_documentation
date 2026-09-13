---
description: Every config file in The Ecosystem, with its keys and default values.
---

# Configuration

All config files are in `config/vector-point/` inside the game or server folder. Each mod creates its file with default values the first time it runs.

## Pixel Maps

`config/vector-point/pixelmaps.toml` is on the server. A single world can override it with a copy at `<world>/serverconfig/vector-point/pixelmaps.toml`.

### `[server]`

| Key | Default | What it does |
| :--- | :--- | :--- |
| `enabled` | `true` | Set to `false` to turn the map off |
| `allowIntegratedServer` | `true` | Also runs the map in singleplayer and LAN worlds |
| `bindAddress` | `"0.0.0.0"` | The network interface the web server listens on. Use `"127.0.0.1"` behind a reverse proxy |
| `port` | `8123` | The web server port, from 1 to 65535 |
| `publicUrl` | `""` | The address players are given. When blank, it is built from the port |
| `categories` | `["Restaurants", "Camps", "Fun", "Banks", "Shops"]` | The tags a world starts with. It is only read the first time a world runs; after that the tag list is `<world>/pixelmaps/data/tags.json` |

### `[render]`

| Key | Default | What it does |
| :--- | :--- | :--- |
| `chunksPerSecond` | `64` | How many chunks are turned into tiles each second, from 1 to 4096 |
| `zoomLevels` | `6` | How many zoomed-out tile levels sit above the native one, from 1 to 12 |
| `renderOnChunkLoad` | `true` | Draws a chunk whenever it loads |
| `liveBlockUpdates` | `true` | Redraws a chunk when someone builds in it |
| `chunkCooldownSeconds` | `20` | How long a chunk waits before it can be drawn again, from 0 to 3600. Changes during the wait are kept |
| `backfillOnStart` | `false` | Redraws every generated chunk from disk on each start. `/vp map rebuild` does the same when you ask for it |
| `biomeTint` | `true` | Colours grass, leaves and water by biome |
| `contours` | `true` | Draws contour banding |
| `contourInterval` | `8` | Blocks of height between contour lines, from 1 to 64 |
| `contourStrength` | `0.30` | How much a contour line darkens the pixel under it, from 0.0 to 1.0 |

Operators can change most `[render]` settings on the map itself under Settings > Map rendering, and Pixel Maps saves the change to this file. The bind address, port and zoom levels can only be set in the file, because they cannot change while the web server is running.

## Chat

`config/vector-point/chat.toml` is in each player's own game folder.

| Key | Default | What it does |
| :--- | :--- | :--- |
| `style` | `"TOWER"` | `TOWER` uses the tabbed chat window, and `VANILLA` leaves Minecraft's chat alone |

The chat window's size and opacity follow Minecraft's own chat settings.

## Menu

`config/vector-point/menu.toml` is in each player's own game folder and comes with `vp-network`.

| Key | Default | What it does |
| :--- | :--- | :--- |
| `registerPlaceholders` | `true` | Adds The Ecosystem's [placeholders](/reference/fancymenu) to FancyMenu |
| `useCustomMenu` | `true` | Reserved for the Vector Point menu layout. It has no effect yet |

## Network services

`config/vector-point/agc.toml` and `config/vector-point/friends.toml` belong to the coordinator service and the friends list, neither of which is running yet. Leave both at their defaults. Setting `enabled = false` under `[agc]` stops the mod from trying to connect.
