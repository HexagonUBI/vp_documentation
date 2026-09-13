---
description: Drawing territories, towns and streets so Pixel Maps can give every spot an address.
---

# Territories and towns

Territories, towns and streets give every spot on the map an address. When you click somewhere, the address comes from the areas that cover that spot, such as `High Street, Ozark, English Territory`. Pixel Maps does not store which town a place is in, so moving a border changes the address of everything inside it.

| Kind | Made of | Who edits it |
| :--- | :--- | :--- |
| Territory | Chunks, or the whole world | Operators |
| Town | Chunks | Staff |
| Street | Blocks | Staff |

Areas of the same kind never overlap. Two towns cannot hold the same chunk, and the server removes any overlap from a new claim, whether the claim came from the website or a command.

## The whole-world territory

A territory can claim the whole world instead of painted chunks. It then covers every chunk that no other territory holds. On a server with one country, that gives the whole map an address, and you can still paint a second territory later without redrawing the first. Only one territory can claim the whole world.

## Drawing on the map

Staff open the admin panel with its button in the top bar. The panel has two tabs: Waiting for review, which holds the moderation queue, and The Atlas, which is the border editor.

The Atlas turns the map into a drawing canvas, with tools on the left and the selected area's details on the right. Every border on the current layer is drawn in its own colour. Territory borders show in grey under towns, so you can see which territory you are drawing in.

| Tool | What it does |
| :--- | :--- |
| Select | Leaves the map alone. Drag to move around and click a border to select it |
| Draw | Claims every chunk the pointer crosses |
| Shape | Claims a box you drag out |
| Eraser | Releases every chunk the pointer crosses |
| Fill | Fills a gap enclosed by the border, and refuses if the gap is open |

- Hold Shift to make a stroke do the opposite.
- Ctrl+Z undoes strokes.
- Each stroke is saved when it ends, so a dropped connection loses one stroke at most. Typed details need the Save button, and the Atlas asks before you lose unsaved ones.
- Closing a loop claims everything inside it. Erasing a chunk inside a shape leaves a hole, and the hole stays.
- Streets are painted in blocks, three blocks wide, because a road is narrower than a chunk.

The details panel holds the name, description and colour, plus a territory's flag, languages, currency and guidelines, or a town's history. The map's territory and town panels show these details.

The Atlas is not available in the 3D view.

## How areas appear on the map

Areas have no fill or outline on the map. They show up as names.

- A territory's name is written faintly across its land and fades further as you zoom in.
- A town's name appears once the town is big enough on screen. A town split into separate pieces, such as by a river, gets a name on each piece.
- A street's name appears only when you are zoomed in close enough to be on it.

Selecting a town draws its border as a dashed line.

## From inside the game

The `/vp map area` commands create and paint areas from where you stand, which helps when you want to claim the chunk under your feet or check a border. `/vp map where` prints the address of your position. See [Commands](/start/commands#territories-towns-and-streets).
