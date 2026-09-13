---
title: Commands
description: Every /vp command, and the permission each one needs.
sidebar:
  order: 2
---

Everything lives under `/vp`. Each jar adds its own branch, so which commands exist
depends on what is installed. Type `/vp` on its own for a reminder.

## Who may run what

| Label | Means |
| :--- | :--- |
| Anyone | Every player |
| Staff | Operator level 2 or higher, or a name on the [moderator list](/admins/roles-and-data/) |
| Op 2 | Operator permission level 2 or higher |
| Op 3 | Operator permission level 3 or higher |

A player given `/op` gets level 4 by default (`op-permission-level` in
`server.properties`), which covers everything here.

## Network

From `vp-network`.

| Command | Who | What it does |
| :--- | :--- | :--- |
| `/vp` | Anyone | Points you at the other commands |
| `/vp status` | Anyone | The version and which modules loaded |
| `/vp account` | Anyone | Opens a screen to set or change your map password. See [signing in](/players/using-the-map/#signing-in) |

## Chat

From `vp-chat`. These run on your own game, so they work on any server.

| Command | What it does |
| :--- | :--- |
| `/vp chat` | Which chat style is active and which tab you are on |
| `/vp chat tabs` | Lines and unread messages per tab |
| `/vp chat vanilla` | Switch to Minecraft's own chat for this session, and back |

## Pixel Maps

From `vp-pixelmaps`, on the server.

| Command | Who | What it does |
| :--- | :--- | :--- |
| `/vp map` | Anyone | Prints a clickable link to the map. `/vp map url` does the same |
| `/vp map status` | Anyone | Renderer state and how much is still waiting to be drawn |
| `/vp map where` | Anyone | The address of where you stand: street, town, territory |
| `/vp map palette` | Op 2 | How many block colours were worked out |
| `/vp map reload` | Op 2 | Re-reads places, streetviews, tags, photos, reviews, areas and moderators from disk |
| `/vp map rebuild` | Op 2 | Redraws every tile from the world's region files |
| `/vp map pyramid` | Op 2 | Builds the zoomed-out tiles from the ones on disk |

### Places and streetview points

Places live under `/vp map mark`, streetview points under `/vp map streetview`. Both
take the same subcommands. You can change and remove your own; staff can change
anyone's.

| Subcommand | What it does |
| :--- | :--- |
| `add <name>` | Adds one where you stand |
| `addat <x y z> <name>` | Adds one at a position |
| `list` | Everything approved |
| `mine` | Only the ones you added |
| `near [radius]` | What is around you. Radius in blocks, default 128, at most 4096 |
| `info <id>` | Details of one |
| `edit <id>` | Brings back the clickable editing panel |
| `remove <id>` | Deletes one |
| `set <id> name <text>` | Renames it |
| `set <id> description <text>` | Sets the description |
| `set <id> tags <a, b, c>` | Sets its tags from the server's tag list |
| `set <id> icon <icon>` | Picks its glyph. The command suggests every icon the map has |
| `set <id> color <#hex>` | Sets the badge colour, for example `#d052c0` |
| `set <id> image <url>` | Sets its picture |
| `set <id> here` | Moves it to where you stand |
| `set <id> pos <x y z>` | Moves it to a position |

Review lives under `mark`, and covers streetview points too:

| Subcommand | Who | What it does |
| :--- | :--- | :--- |
| `pending` | Staff | Every place and streetview point waiting for review |
| `approve <id>` | Staff | Puts a waiting one on the map |
| `deny <id> [reason]` | Staff | Refuses it, with an optional reason |

Only for streetview points:

| Subcommand | Who | What it does |
| :--- | :--- | :--- |
| `capture <id>` | Staff | Starts taking the panorama. See [streetviews](/players/places-and-streetviews/#taking-a-streetview) |

### Tags and moderators

| Command | Who | What it does |
| :--- | :--- | :--- |
| `/vp map tag list` | Op 2 | The tag list |
| `/vp map tag add <tag>` | Op 3 | Adds a tag |
| `/vp map tag remove <tag>` | Op 3 | Removes a tag |
| `/vp map tag reload` | Op 3 | Re-reads the tag list from disk |
| `/vp map moderator list` | Op 2 | Who is on the moderator list |
| `/vp map moderator add <name>` | Op 3 | Adds a moderator, effective immediately |
| `/vp map moderator remove <name>` | Op 3 | Removes one |
| `/vp map moderator reload` | Op 3 | Re-reads the list from disk |

### Territories, towns and streets

The whole `area` branch needs Staff. Drawing borders is easier on the website; see
[Territories and towns](/admins/territories/).

| Command | Who | What it does |
| :--- | :--- | :--- |
| `/vp map area list` | Staff | Every area |
| `/vp map area territory <name>` | Op 2 | Creates a territory |
| `/vp map area town <name>` | Staff | Creates a town |
| `/vp map area street <name>` | Staff | Creates a street |
| `/vp map area claim <id> [radius]` | Staff | Claims the chunk you stand in, or a square of chunks around it. Radius 0 to 64 |
| `/vp map area unclaim <id> [radius]` | Staff | The same, the other way |
| `/vp map area point <id>` | Staff | Adds a corner to a street where you stand |
| `/vp map area wholeworld <id>` | Op 2 | Makes a territory claim every chunk no other territory holds |
| `/vp map area remove <id>` | Staff | Deletes an area. A territory needs Op 2 |

### On your own client

With `vp-pixelmaps` in your own mods folder you also get `/vpmap`. You normally never
type these: `capture` gives you links that run them.

| Command | What it does |
| :--- | :--- |
| `/vpmap panorama [name]` | Renders six panorama faces into your game folder |
| `/vpmap upload <url> <id> <token>` | Sends the newest capture to the map |
