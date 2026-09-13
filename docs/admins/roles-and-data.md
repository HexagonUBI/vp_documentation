---
description: Operators and moderators in The Ecosystem, and where the mods keep their files.
---

# Roles and data

## Roles

| Role | Who | Can |
| :--- | :--- | :--- |
| Player | Everyone | Add places, streetview points, pictures and reviews, and edit or delete their own. Additions wait for review |
| Moderator | Names on the moderator list | Everything a player can, plus review the queue and edit anyone's places. Their own additions skip the queue. They also manage towns and streets |
| Operator | Operator level 2 or higher | Everything a moderator can, plus manage territories, rebuild the map and change its render settings |
| Owner | Operator level 3 or higher | Everything an operator can, plus manage the tag list and the moderator list |

The server's op list decides who is an operator, so `/op` and `/deop` are the way to change it. The website checks the list every few seconds.

### The moderator list

The list is in `<server root>/vectorpoint/moderators.json`:

```json
{
  "moderators": ["SomePlayer", "AnotherPlayer"]
}
```

Names match regardless of capitalisation. The list stores names rather than UUIDs, so a player who changes their name loses the role until the list is updated.

`/vp map moderator add <name>` saves the file and applies the change immediately. If you edit the file by hand, run `/vp map moderator reload` afterwards.

## Where files live

The mods keep installation data separate from world data. Installation data is about people: accounts and roles. World data is what appears on that world's map. Replacing a world therefore leaves everyone's password and role alone.

### Installation

```text
<server root>/vectorpoint/
  accounts.json     map accounts, one per player UUID, with hashed passwords
  moderators.json   the moderator list
  sessions.json     who is signed in to the map
```

### World

```text
<world>/pixelmaps/
  tiles/                     the rendered map
  data/marks.json            places
  data/streetviews.json      streetview points
  data/tags.json             the tag list
  data/photos.json           pictures of places
  data/reviews.json          reviews
  data/areas.json            territories, towns and streets
  data/missed-regions.json   regions still waiting to be drawn
  images/                    uploaded pictures
  streetviews/               captured panoramas
  colors.json                your block colour overrides
  colors.unresolved.json     blocks that got no colour
```

::: warning Backups
A world backup does not include accounts or moderators. Back up `<server root>/vectorpoint/` as well.
:::

### Editing files by hand

Pixel Maps works from the copy of this data it holds in memory and writes changes to disk. After you edit a file under `data/`, run `/vp map reload`. Otherwise the next change made in game or on the website overwrites your edit.

Each file is written to a temporary copy and then moved into place, so a crash cannot leave a half-written file.
