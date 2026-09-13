---
layout: home
title: The Ecosystem
hero:
  name: The Ecosystem
  text: Mods for the VectorPoint server
  tagline: A tabbed chat on top of Minecraft's own, a web map of the world that works like Google Maps, and the library they share.
  image:
    src: /logo.png
    alt: A beehive block
  actions:
    - theme: brand
      text: Read the documentation
      link: /start/installing
    - theme: alt
      text: Join the Discord
      link: https://discord.gg/mpH3RJBssw
---

## What it is

The Ecosystem is the family of `vp_` mods written for VectorPoint, a whitelisted Minecraft server built around Create: Aeronautics. Every part runs on one shared library, so a player has a single account and a single set of roles in all of them.

The tabbed chat takes after Tower Unite, and so do the coordinator service and the scoreboard that are still in the works. Pixel Maps takes its layout and behaviour from Google Maps.

## Built for NeoForge 1.21.1

The Ecosystem needs NeoForge 21.1.234 or newer on Minecraft 1.21.1, with Java 21. It ships as three jars, so a server or a player installs only what they use.

| Jar | Install on | What it adds |
| :--- | :--- | :--- |
| `vp-network` | Client and server | The shared library: accounts, roles, commands and the network modules |
| `vp-chat` | Client | The tabbed chat window |
| `vp-pixelmaps` | Server | The web map. Players add it to their own game only to take streetview panoramas |

[Installing](/start/installing) covers versions and updates.

## Features

### Chat

- Global, Local, Event and Draft tabs. Local messages are copied into Global and server messages into Local, so one open tab still shows them.
- Minecraft's own chat underneath, so message history, command completion and clickable links work as in vanilla.
- The window follows Minecraft's chat width, height, scale and opacity settings.
- A command and a key for switching back to vanilla chat at any time.

### Pixel Maps

- A web map served by the Minecraft server itself, with no separate web server or database.
- Classic, Vector and Terrain styles, plus a 3D view over the real height of the ground.
- Places, photos and reviews. Places and photos from players who are not staff wait for a moderator.
- Streetview panoramas taken in game and linked together, so you can walk between them on the map.
- Territories, towns and streets, which give every spot on the map an address.
- The map keeps up as people build, and catches up by itself after a world is pre-generated.

### Shared library

- One account per player, used by every module and set in game with `/vp account`.
- Operators come from the server's op list, and moderators from one list that every module reads.
- Placeholders that FancyMenu layouts can display.
- Every command lives under `/vp`.

## Still to come

The coordinator service behind global chat and friends, a main menu, an interactive scoreboard, and a minimap drawn from Pixel Maps are planned. The [roadmap](/roadmap) describes each one.

## Related projects

| Project | Links | Description |
| :--- | :--- | :--- |
| VectorPoint | [GitHub](https://github.com/SimpleFoxOfficial/VectorPoint) | The modpack the server runs, a steampunk SMP built around Create: Aeronautics |
| Plasmo Voice Walkie-Talkie | [Modrinth](https://modrinth.com/mod/pv-addon-walkietalkie), [GitHub](https://github.com/HexagonUBI/pv-addon-walkietalkie) | Walkie-talkies and radio stations for Plasmo Voice. Players on the same frequency can talk to each other, including across dimensions. Made for VectorPoint |

## Community

- [Discord](https://discord.gg/mpH3RJBssw): the Hexagon Official community server. VectorPoint is whitelisted, and players ask for verification there before they can join.
- [Trello](https://trello.com/b/2Pxq0v1X/vector-point): what has been released and what is being worked on.
- [Live map](https://maps.simplefox.studio): Pixel Maps running on VectorPoint.
- [Ko-fi](https://ko-fi.com/simplefox): donations to VectorPoint.
- [GitHub](https://github.com/HexagonUBI): these docs and the walkie-talkie addon.

## Documentation

Start with [Installing](/start/installing), or go straight to the [commands](/start/commands).
