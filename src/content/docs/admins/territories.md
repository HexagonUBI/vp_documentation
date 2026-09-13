---
title: Territories and towns
description: Drawing territories, towns and streets so the map can give every spot an address.
sidebar:
  order: 4
---

Territories, towns and streets exist to answer one question: what is this place
called? Click anywhere on the map and the address comes from the areas that cover it,
such as `High Street, Ozark, English Territory`. Nothing stores which town a place is
in, so moving a border relabels everything inside it.

| Kind | Made of | Who edits |
| :--- | :--- | :--- |
| Territory | Chunks, or the whole world | Operators |
| Town | Chunks | Staff |
| Street | Blocks | Staff |

Within one kind, nothing overlaps. Two towns cannot hold the same chunk, and the
server takes back anything a new claim shares with a neighbour, whether it came from
the website or a command.

## The whole-world territory

A territory can claim the whole world instead of painted chunks. It then covers every
chunk no other territory holds, which suits a server with one country: the whole map
gets an address, and a second territory can be painted later without redrawing the
first. Only one territory can do this.

## Drawing on the map

Staff open the **admin panel** from its button in the top bar. It has two tabs:
**Waiting for review**, the moderation queue, and **The Atlas**, which is the editor.

The Atlas turns the map into a drawing canvas. The tools run down the left, the
selected area's details down the right. Every border on the layer is drawn in its own
colour, and territory borders show in grey underneath towns so you can see which
country you are drawing in.

| Tool | Does |
| :--- | :--- |
| Select | Nothing to the map. Drag to move around, click a border to pick it up |
| Draw | Freehand. Claims every chunk the pointer crosses |
| Shape | Drag a box to claim |
| Eraser | Freehand, removing |
| Fill | Fills a gap the border closes around. Refuses if the space is open |

- Hold **Shift** to make a stroke do the opposite.
- **Ctrl+Z** undoes strokes.
- Each stroke is saved the moment it ends, so a dropped connection costs one stroke.
  Only typed details need the Save button, and the Atlas asks before you lose them.
- Closing a loop claims what is inside it. Erasing a chunk inside a shape makes a
  hole on purpose, and it stays a hole.
- Streets are painted in blocks, three wide, since a road is narrower than a chunk.

The details panel holds the name, description and colour, plus a territory's flag,
languages, currency and guidelines, and a town's history. These show on the map's
territory and town panels.

The Atlas is not available in the 3D view.

## On the map

Areas are not filled in or outlined. They show up as names:

- A **territory** name is written across its land, faded, and fades further as you
  zoom in.
- A **town** name appears once the town is large enough on screen to be worth
  labelling, and a town split by a river gets a name on each part.
- A **street** name appears only when you are zoomed in close enough to be on it.

Selecting a town draws its border as a dashed line.

## From inside the game

The `/vp map area` commands make and paint areas where you stand. They are handy for
claiming the chunk under your feet or checking a border; `/vp map where` tells you the
address of where you are. See [Commands](/start/commands/#territories-towns-and-streets).
