---
title: Chat
description: The tabbed chat window, its keys, and how to switch back to vanilla chat.
sidebar:
  order: 1
---

`vp-chat` moves Minecraft's chat into a tabbed window, after the chat in Tower Unite.
It is still Minecraft's own chat underneath, so sent-message history on the up arrow,
command completion, clickable links, hover text and scrolling all behave exactly as
they always have.

## Opening it

Press **T** or **/** as usual. There is also an **Open chat** key, bound to **Y** by
default.

While the chat is closed you only see incoming messages, fading the way vanilla
fades them. The window and its tabs appear once you open it. Its size comes from
Minecraft's own chat settings (width, height, scale and opacity), so change those
under Options, Chat Settings.

## Tabs

| Tab | What lands there |
| :--- | :--- |
| Global | Chat across the whole network. Local messages also show here, behind a green **LOCAL** tag |
| Local | Messages from players on this server. This is the tab you start on |
| Event | Server and system messages. They also show in Local |
| Draft | A scratch pad. Nothing typed here is ever sent |

Mirroring local messages into Global, and events into Local, means watching one tab
does not make you miss things.

Global chat needs the network's coordinator service, which is not running yet. Until
it is, the Global tab only shows the local messages mirrored into it, and anything
you type there is not delivered. See the [roadmap](/roadmap/).

Switch tabs by:

- pressing **Tab** in the chat window, unless you are typing a command, where Tab
  still completes it
- clicking a tab's name
- the **Next chat tab** key, which has no binding until you give it one

Each tab keeps its last 512 lines. Joining a server starts every tab empty.

## Keys

All three are under **Vector Point Chat** in Options, Controls, Key Binds.

| Key | Default | What it does |
| :--- | :--- | :--- |
| Open chat | Y | Opens the tabbed chat |
| Next chat tab | Not bound | Moves to the next tab |
| Toggle vanilla chat | Not bound | Switches to Minecraft's own chat for this session, and back |

## Going back to vanilla chat

For this session only, type `/vp chat vanilla` or press the Toggle vanilla chat key.

To make it permanent, edit `config/vector-point/chat.toml` in your game folder:

```toml
[chat]
style = "VANILLA"
```

`TOWER` is the default and brings the tabbed window back.
