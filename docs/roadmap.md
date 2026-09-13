---
description: What works in The Ecosystem today and what is planned.
---

# Roadmap

The Ecosystem is in beta. This page lists what works now and what is still planned.

## Working now

- The tabbed chat window, with Local, Event and Draft tabs and a switch back to vanilla chat.
- Pixel Maps with Classic, Vector and Terrain styles, the 3D view, places, pictures, reviews, streetviews, territories, towns and streets, map accounts, and moderation from both the game and the website.
- The shared library, with accounts used by every module, operator and moderator roles, and FancyMenu placeholders.

## Planned

### The coordinator (AGC)

The coordinator is a service outside Minecraft that every part of The Ecosystem connects to, modelled on the Authoritative Game Coordinator in Tower Unite. It will carry the things that should work across servers: identity, currency, roles, cross-server chat and friends. The mods already include the connection, and the service itself has not been written yet.

### Global chat

The Global tab is already in the chat window. It starts delivering messages once the coordinator is running.

### Friends

A friends list with blocking, privacy settings and direct messages, stored by the coordinator so that it follows a player from server to server.

### Menu

A main menu layout for The Ecosystem built on FancyMenu, styled after Tower Unite.

### Scoreboard

An optional client jar that replaces the player list on Tab with an interactive menu. Each player gets a card with their ping and current activity, such as fishing or AFK, and a right-click menu. Profiles are styled after Tower Unite, and extra tabs hold awards, settings, news and an About page that the server configures. With Plasmo Voice installed, it adds quick mute buttons and voice groups.

### Navigator

A client-only minimap in the corner of the screen, styled after the one in GTA V, drawn from the Pixel Maps of the server you are playing on. It is installed separately from The Ecosystem and only changes what you see.

### Pixel Maps

- Favourites and reporting on the website.
- Dropping into a streetview from the 3D view.
- Using the Atlas in the 3D view.
