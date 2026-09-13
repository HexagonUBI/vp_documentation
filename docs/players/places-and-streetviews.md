---
description: Adding places to Pixel Maps from inside the game, and taking streetview panoramas.
---

# Places and streetviews

You can do everything on this page on the website once you are [signed in](/players/using-the-map#signing-in). The in-game commands are quicker when you are standing at the spot.

## Adding a place

Stand at the place and type:

```text
/vp map mark add Horizon Condos
```

The server answers with a panel where every field is clickable:

```text
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

Clicking `[set]` or `[change]` fills your chat box with the matching command and puts the cursor where the value goes. Type the value and press Enter. The `quick` icons and `[move here]` apply as soon as you click them. `/vp map mark edit <id>` shows the panel again later.

The id comes from the name. "Horizon Condos" becomes `horizon-condos`, and a second place with the same name becomes `horizon-condos-2`. Ids keep only ASCII letters and digits, so a name with none of those gets five random letters as its id.

Tags are matched to the spelling in the server's tag list, so `shops` and `Shops` count as one tag. Operators manage that list with `/vp map tag`.

### Review

A place added by staff goes on the map immediately. A place added by anyone else waits for review. Every staff member online gets a message with your name, the coordinates, and buttons to approve or deny it, and you get a message when they decide. The website never shows places that are waiting.

Staff can list the queue with `/vp map mark pending` and decide with `/vp map mark approve <id>` or `/vp map mark deny <id> [reason]`.

## Streetview points

A streetview point marks the spot a panorama is taken from. Anyone can add one:

```text
/vp map streetview add Spawn Square
```

The point records where you stand and which way you face, and it goes through the same review as a place. Staff take the panorama as a separate step.

## Taking a streetview

Only a game client can render a panorama, so taking one needs `vp-pixelmaps` in your own mods folder as well as on the server. Without it, the links below do nothing.

1. Stand where you want the shot and run `/vp map streetview capture <id>`.
2. Click [take the shot]. The game freezes for a moment while it renders six faces, each 1024 pixels square, into `pixelmaps-panoramas/` in your game folder, then posts a link to that folder in chat. The first face always points north, so your facing and window size do not matter.
3. Click [send it to the map] to upload the newest capture to that point. The link works for ten minutes and only for that point.

The two steps are separate because the game writes the images to disk after the capture command returns. You can take panoramas without uploading them.

The map links panoramas that are within 128 blocks of each other, so you can walk between them.
