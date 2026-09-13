---
title: Roadmap
description: What is built, and what is planned for the Vector Point network.
---

The network is in beta. This page says plainly what works today and what does not
yet, so nothing elsewhere in the wiki has to hedge.

## Working now

- **Chat**: the tabbed window, Local, Event and Draft tabs, vanilla fallback.
- **Pixel Maps**: Classic, Vector and Terrain styles, the 3D view, places, pictures,
  reviews, streetviews, territories, towns and streets, map accounts, moderation from
  the game and the website.
- **Network library**: accounts shared by every module, operator and moderator roles,
  FancyMenu placeholders.

## Next

### The coordinator (AGC)

A service outside Minecraft that the whole network connects to, after Tower Unite's
Authoritative Game Coordinator. It is what carries anything that should outlive one
server: identity, currency, roles, cross-server chat and friends. The mod side of the
connection exists; the service does not yet.

### Global chat

The Global tab is already in the chat window. It starts delivering messages once the
coordinator is running.

### Friends

A friends list with blocking, privacy settings and direct messages, kept by the
coordinator so it follows a player between servers.

### Menu

A Vector Point main menu layout built on FancyMenu, in the style of Tower Unite.

### Scoreboard

An optional client jar that replaces the player list on Tab with an interactive menu:
player cards with ping and activity (fishing, AFK), a context menu per player, Tower
Unite style profiles, and tabs for awards, settings, news and an About page the server
configures. With Plasmo Voice installed it adds quick mute buttons and voice groups.

### Navigator

A client-only minimap in the corner of the screen, in the style of GTA V's, drawn from
the Pixel Maps of whichever server you are on. Separate from the rest of the network
and purely for looks.

### Pixel Maps

- Favourites and reporting on the website.
- Dropping into a streetview from the 3D view.
- The Atlas in the 3D view.
