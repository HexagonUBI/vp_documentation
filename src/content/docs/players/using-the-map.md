---
title: Using the map
description: Pixel Maps, the web map of the server - finding it, reading it, signing in and adding to it.
sidebar:
  order: 2
---

Pixel Maps is a website, not an in-game screen. The server draws the world into map
tiles as it is explored and built on, and serves a map of it that works like Google
Maps: places, addresses, reviews, photos and streetviews.

VectorPoint's map is at [maps.simplefox.studio](https://maps.simplefox.studio). On
any other server with Pixel Maps, type `/vp map` and click the link. The map only
answers while the Minecraft server is running.

## Styles

The swatch at the bottom left switches between three ways of drawing the same ground.

| Style | Says | Looks like |
| :--- | :--- | :--- |
| Classic | What the ground is made of | An in-game map: vanilla map colours, contour lines, and the sea bed showing through shallow water |
| Vector | What the ground is used for | A road map: flat fills for forest, field, sand and water, with a thin outline where they meet |
| Terrain | How high it is | An atlas: colour from sea bed to snow line, lit from the north west |

## 3D

The 3D button stands the map up, with the same tiles laid over the ground's real
height. It keeps loading as you move.

- **Left drag** moves over the ground, **right drag** turns the camera.
- The **wheel** zooms. **Clicking the compass** turns back to north.
- Places, streetview points and town names stay clickable, and clicking bare ground
  selects it, just like on the flat map.
- The 3D view always draws in Classic and puts your style back when you leave.

## Finding out what something is

Click anywhere on the map. The card at the bottom says what is there:

- **Bare ground** gets its biome, its address and its coordinates.
- **A place** gets its name, address and picture. Click the name for the full view:
  photos, description, tags, who added it, and reviews.
- **A town name** opens the town: its history, the places standing in it, and every
  photo of them. The territory in any address line opens the territory, with its
  flag, languages, currency and guidelines.

Addresses are worked out from where something is, so they read like
`High Street, Ozark, English Territory` without anybody typing them.

## Streetviews

Drag the little person from the bottom right onto the map. Streetview points light up
in blue while you hold it; drop it on one to look around. Clicking the person instead
of dragging shows the points, which is the way in on a touch screen.

Inside a panorama, drag to look around. A ring follows your pointer across the ground,
and a chevron inside it points at the next panorama in that direction. Click to walk
there. You keep facing the same way when you arrive.

A selected place with a streetview within 24 blocks also uses it as its picture.

## Signing in

Reading the map needs no account. Adding to it does.

1. In game, type `/vp account`. A screen opens where you choose a password of at
   least 8 characters. It is typed into a screen rather than into chat so it never
   appears in the server log.
2. On the map, sign in with your Minecraft name and that password.

You can change the password later from the map as well. Too many wrong attempts in a
row and the map makes you wait a minute.

Operators on the Minecraft server are operators on the map, and names on the
moderator list are moderators. Nobody has to set either up twice.

## Adding to the map

Once signed in you can:

- **Add a place** or suggest an edit to one.
- **Upload a picture** of a place.
- **Review a place**: a rating out of five and a few words. One review per person per
  place, so posting again replaces your earlier one.

Places and pictures from staff go up straight away. Everyone else's wait for a
moderator, who can approve, refuse, or, for a place, send it back with a note saying
what to change. The bell next to your avatar tells you what was decided; editing a
place that was sent back puts it back in the queue.

Reviews are not queued. A moderator removes the ones that should not be there.

You can also add places from inside the game. See
[Places and streetviews](/players/places-and-streetviews/).
