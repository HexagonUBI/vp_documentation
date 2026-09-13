---
title: Installing
description: Which Vector Point jar goes where, and what each one needs.
sidebar:
  order: 1
---

The network ships as three jars. They are separate on purpose, so a server or a player
only installs the parts they use.

| Jar | Install on | What it is |
| :--- | :--- | :--- |
| `vp-network` | Client and server | The library every other part builds on, plus the network modules: accounts, the coordinator connection, Global Chat, Friends and Menu |
| `vp-chat` | Client | The [tabbed chat window](/players/chat/) |
| `vp-pixelmaps` | Server | The [web map](/players/using-the-map/). Players only need it on their own game to [take streetviews](/players/places-and-streetviews/#taking-a-streetview) |

Jars are named `<name>-<version>-1.21.1-neoforge.jar`, and all three from one release
share a version. This wiki describes `0.1.0-beta.31`.

## Requirements

- Minecraft 1.21.1
- NeoForge 21.1.234 or newer
- Java 21

`vp-chat` and `vp-pixelmaps` both need `vp-network` installed next to them, with a
version at least as new as theirs. Mixing versions from different releases is not
supported.

## Updating

Remove the old jars before adding new ones. Two copies of the same jar declare the same
mods, and NeoForge refuses to start with duplicates.

Nothing else needs doing. Config files keep their values across updates, and data that
has moved between versions is moved on the first start.
