---
description: Every /vp command in The Ecosystem and the permission each one needs.
---

# Commands

Every command starts with `/vp`. Each jar adds its own branch, so the commands you have depend on what is installed. Typing `/vp` on its own points you to the rest.

## Who may run what

| Label | Means |
| :--- | :--- |
| Anyone | Every player |
| Staff | Operator level 2 or higher, or a name on the [moderator list](/admins/roles-and-data#the-moderator-list) |
| Op 2 | Operator permission level 2 or higher |
| Op 3 | Operator permission level 3 or higher |

A player made operator with `/op` gets level 4 by default (`op-permission-level` in `server.properties`), which covers every command on this page.

## Network

These come with `vp-network`.

| Command | Who | What it does |
| :--- | :--- | :--- |
| `/vp` | Anyone | Points you to the other commands |
| `/vp status` | Anyone | Shows the version and which modules loaded |
| `/vp account` | Anyone | Opens a screen for setting your map password. See [signing in](/players/using-the-map#signing-in) |

## Chat

These come with `vp-chat` and run in your own game, so they work on any server.

| Command | What it does |
| :--- | :--- |
| `/vp chat` | Shows the chat style and the tab you are on |
| `/vp chat tabs` | Shows how many lines and unread messages each tab has |
| `/vp chat vanilla` | Switches to Minecraft's own chat for this session, or back |

## Pixel Maps

These come with `vp-pixelmaps` on the server.

| Command | Who | What it does |
| :--- | :--- | :--- |
| `/vp map` | Anyone | Prints a clickable link to the map. `/vp map url` does the same |
| `/vp map status` | Anyone | Shows the renderer state and how much is still waiting to be drawn |
| `/vp map where` | Anyone | Prints the address where you stand: street, town and territory |
| `/vp map palette` | Op 2 | Shows how many block colours were worked out |
| `/vp map reload` | Op 2 | Re-reads places, streetviews, tags, photos, reviews, areas and moderators from disk |
| `/vp map rebuild` | Op 2 | Redraws every tile from the world's region files |
| `/vp map pyramid` | Op 2 | Builds the zoomed-out tiles from the tiles on disk |

### Places and streetview points

Places are under `/vp map mark` and streetview points are under `/vp map streetview`. Both take the subcommands below. You can change and remove your own, and staff can change anyone's.

| Subcommand | What it does |
| :--- | :--- |
| `add <name>` | Adds one where you stand |
| `addat <x y z> <name>` | Adds one at a position |
| `list` | Lists everything approved |
| `mine` | Lists the ones you added |
| `near [radius]` | Lists what is around you. The radius is in blocks, 128 by default and at most 4096 |
| `info <id>` | Shows the details of one |
| `edit <id>` | Shows the clickable editing panel again |
| `remove <id>` | Deletes one |
| `set <id> name <text>` | Renames it |
| `set <id> description <text>` | Sets the description |
| `set <id> tags <a, b, c>` | Sets its tags from the server's tag list |
| `set <id> icon <icon>` | Picks its glyph. The command suggests every icon the map has |
| `set <id> color <#hex>` | Sets the badge colour, such as `#d052c0` |
| `set <id> image <url>` | Sets its picture |
| `set <id> here` | Moves it to where you stand |
| `set <id> pos <x y z>` | Moves it to a position |

The review commands are under `mark` and cover streetview points too:

| Subcommand | Who | What it does |
| :--- | :--- | :--- |
| `pending` | Staff | Lists every place and streetview point waiting for review |
| `approve <id>` | Staff | Puts a waiting one on the map |
| `deny <id> [reason]` | Staff | Refuses it, with an optional reason |

Streetview points have one more:

| Subcommand | Who | What it does |
| :--- | :--- | :--- |
| `capture <id>` | Staff | Starts taking the panorama. See [taking a streetview](/players/places-and-streetviews#taking-a-streetview) |

### Tags and moderators

| Command | Who | What it does |
| :--- | :--- | :--- |
| `/vp map tag list` | Op 2 | Shows the tag list |
| `/vp map tag add <tag>` | Op 3 | Adds a tag |
| `/vp map tag remove <tag>` | Op 3 | Removes a tag |
| `/vp map tag reload` | Op 3 | Re-reads the tag list from disk |
| `/vp map moderator list` | Op 2 | Shows the moderator list |
| `/vp map moderator add <name>` | Op 3 | Adds a moderator, effective immediately |
| `/vp map moderator remove <name>` | Op 3 | Removes a moderator |
| `/vp map moderator reload` | Op 3 | Re-reads the moderator list from disk |

### Territories, towns and streets

Everything under `area` needs Staff. Borders are easier to draw on the website; see [Territories and towns](/admins/territories).

| Command | Who | What it does |
| :--- | :--- | :--- |
| `/vp map area list` | Staff | Lists every area |
| `/vp map area territory <name>` | Op 2 | Creates a territory |
| `/vp map area town <name>` | Staff | Creates a town |
| `/vp map area street <name>` | Staff | Creates a street |
| `/vp map area claim <id> [radius]` | Staff | Claims the chunk you stand in, or a square of chunks around it. The radius goes from 0 to 64 |
| `/vp map area unclaim <id> [radius]` | Staff | Releases chunks the same way |
| `/vp map area point <id>` | Staff | Adds a corner to a street where you stand |
| `/vp map area wholeworld <id>` | Op 2 | Makes a territory claim every chunk that no other territory holds |
| `/vp map area remove <id>` | Staff | Deletes an area. Deleting a territory needs Op 2 |

## On your own client

With `vp-pixelmaps` in your own mods folder you also get `/vpmap`. The links that `capture` prints run these commands for you.

| Command | What it does |
| :--- | :--- |
| `/vpmap panorama [name]` | Renders six panorama faces into your game folder |
| `/vpmap upload <url> <id> <token>` | Sends the newest capture to the map |
