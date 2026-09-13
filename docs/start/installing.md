---
description: Which jar of The Ecosystem goes on the client, which goes on the server, and what each one needs.
---

# Installing

The Ecosystem ships as three jars, so a server or a player installs only the parts they use.

| Jar | Install on | Contents |
| :--- | :--- | :--- |
| `vp-network` | Client and server | The shared library and the network modules: accounts, the coordinator connection, Global Chat, Friends and Menu |
| `vp-chat` | Client | The [tabbed chat window](/players/chat) |
| `vp-pixelmaps` | Server | The [web map](/players/using-the-map). A player needs it in their own game only to [take streetviews](/players/places-and-streetviews#taking-a-streetview) |

Jars are named `<name>-<version>-1.21.1-neoforge.jar`. The three jars from one release share a version, and this wiki describes `0.1.0-beta.31`.

## Requirements

- Minecraft 1.21.1
- NeoForge 21.1.234 or newer
- Java 21

`vp-chat` and `vp-pixelmaps` each need `vp-network` installed next to them, at the same version or newer.

## Updating

Remove the old jars before you add the new ones. NeoForge refuses to start when two jars declare the same mods.

Config files keep their values across updates. When a release moves data somewhere new, the mod moves it on the first start. For example, `moderators.json` moved out of the world folder into `<server root>/vectorpoint/`.
