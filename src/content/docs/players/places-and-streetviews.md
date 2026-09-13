---
title: Places and streetviews
description: Adding places to Pixel Maps from inside the game, and taking streetview panoramas.
sidebar:
  order: 3
---

Everything here can also be done from the website once you are
[signed in](/players/using-the-map/#signing-in). The in-game route is handiest when
you are standing at the spot.

## Adding a place

Stand where it is and type:

```
/vp map mark add Horizon Condos
```

You get a panel back where every field is a click:

```
[Pixel Maps] Horizon Condos  horizon-condos
  name      Horizon Condos  [change]
  about     not set  [set]
  tags      not set  [set]
  picture   not set  [set]
  icon      menu-world_8x8  [change]
  colour    #d052c0  [change]
  quick     [world] [heart] [star] [pictures] [cart]
  where     305 92 -133  [move here]
```

Clicking `[set]` or `[change]` puts the right command in your chat box with the cursor
where the value goes. Type the value and press Enter. The `quick` icons and
`[move here]` apply straight away. `/vp map mark edit <id>` brings the panel back
later.

The id comes from the name, so "Horizon Condos" is `horizon-condos` and a second one
is `horizon-condos-2`. Ids only keep ASCII letters and digits; a name with none of
those gets five random letters instead.

Tags snap to the spelling on the server's tag list, so `shops` and `Shops` never both
exist. Operators manage that list with `/vp map tag`.

### Review

If you are staff, the place is on the map immediately. Otherwise it waits: every
staff member online gets a message with your name, the coordinates and approve and
deny buttons, and you are told when they decide. Nothing waiting for review is ever
shown on the website.

Staff can see the queue with `/vp map mark pending` and decide with
`/vp map mark approve <id>` or `/vp map mark deny <id> [reason]`.

## Streetview points

A streetview point is a spot a panorama is taken from. Anyone can record one:

```
/vp map streetview add Spawn Square
```

It saves where you stand and which way you face, and goes through the same review as a
place. The panorama itself is taken separately, by staff.

## Taking a streetview

Only a game client can render a panorama, so this is the one part of Pixel Maps that
needs **`vp-pixelmaps` in your own mods folder** as well as on the server. Without it,
clicking the links below does nothing.

1. Stand where you want the shot and run `/vp map streetview capture <id>`.
2. Click **[take the shot]**. The game freezes for a moment while it renders six
   1024px faces into `pixelmaps-panoramas/` in your game folder, then links that
   folder in chat. Which way you face and how big your window is do not matter: the
   first face always looks north.
3. Click **[send it to the map]**. It uploads the newest capture to that point. The
   link works for ten minutes and only for that point.

The two steps are separate because the game finishes writing the pictures after the
command that asked for them has returned. You can take panoramas without ever
uploading them.

Panoramas taken within 128 blocks of each other are linked automatically, so walking
between them on the map works without anyone setting it up.
