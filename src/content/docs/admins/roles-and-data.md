---
title: Roles and data
description: Operators and moderators, and where the mods keep their files.
sidebar:
  order: 3
---

## Roles

| Role | Who | May |
| :--- | :--- | :--- |
| Player | Everyone | Add places, streetview points, pictures and reviews. Edit and delete their own. What they add waits for review |
| Moderator | Names on the moderator list | Everything a player can, plus review the queue and edit anyone's places. Their own additions skip the queue. Can manage towns and streets |
| Operator | Operator level 2 or higher | Everything a moderator can, plus territories, rebuilding the map and changing its render settings |
| Owner | Operator level 3 or higher | Also manages the tag list and the moderator list |

Operator status is read from the server's own op list, so `/op` and `/deop` are the
only way in and out. The website checks it every few seconds.

### The moderator list

`<server root>/vectorpoint/moderators.json`:

```json
{
  "moderators": ["SomePlayer", "AnotherPlayer"]
}
```

Names are matched without regard to case. Because the list holds names rather than
UUIDs, a player who renames keeps their role only if the list is updated.

The easy way is `/vp map moderator add <name>`, which saves the file and takes effect
immediately. If you edit the file by hand, run `/vp map moderator reload` afterwards.

## Where files live

The mods keep two kinds of data apart: what belongs to **the installation** (who people
are and what they may do) and what belongs to **a world** (what is on its map).
Replacing a world costs nobody their password or their role.

### Installation

```
<server root>/vectorpoint/
  accounts.json     map accounts, one per player UUID, passwords hashed
  moderators.json   the moderator list
  sessions.json     who is signed in to the map
```

### World

```
<world>/pixelmaps/
  tiles/                     the rendered map
  data/marks.json            places
  data/streetviews.json      streetview points
  data/tags.json             the tag list
  data/photos.json           pictures of places
  data/reviews.json          reviews
  data/areas.json            territories, towns and streets
  data/missed-regions.json   regions still to catch up on
  images/                    uploaded pictures
  streetviews/               captured panoramas
  colors.json                your block colour overrides
  colors.unresolved.json     blocks that got no colour
```

:::caution[Backups]
A world backup does **not** include accounts or moderators. Back up
`<server root>/vectorpoint/` as well.
:::

### Editing files by hand

The mods work from memory and write to disk, not the other way round. A hand edit to
anything under `data/` does nothing until `/vp map reload`, and the next change made
in game or on the site overwrites it if you have not reloaded. Each file is written to
a temporary copy and moved into place, so a crash cannot leave half a file behind.

Upgrading from a version that kept `moderators.json` inside the world moves it to
`<server root>/vectorpoint/` on the first start.
