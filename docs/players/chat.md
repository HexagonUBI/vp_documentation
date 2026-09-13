---
description: The tabbed chat window from vp-chat, its keys, and how to switch back to vanilla chat.
---

# Chat

`vp-chat` puts Minecraft's chat in a tabbed window modelled on the chat in Tower Unite. It is still Minecraft's chat underneath, so message history on the up arrow, command completion, clickable links, hover text and scrolling behave as they do in vanilla.

## Opening the chat

Press T or / as usual. The Open chat key, which is Y by default, opens it too.

While the chat is closed, incoming messages appear and fade the way vanilla shows them. The window and its tabs appear once you open it. The window follows Minecraft's own chat settings for width, height, scale and opacity, which are under Options > Chat Settings.

## Tabs

| Tab | What lands there |
| :--- | :--- |
| Global | Chat from across the network. Local messages also show here, marked with a green LOCAL tag |
| Local | Messages from players on this server. The chat opens on this tab |
| Event | Server and system messages, which also show in Local |
| Draft | A scratch pad. Nothing typed here is sent |

Because local messages are copied into Global and events into Local, you can keep one tab open and still see them.

::: info Global chat is not live yet
Global chat runs through the coordinator service, which is not running yet. Until it is, the Global tab only shows the local messages copied into it, and anything you type there is not delivered. See the [roadmap](/roadmap).
:::

You can switch tabs in three ways:

- Press Tab in the chat window. While you are typing a command, Tab completes the command instead.
- Click a tab's name.
- Press the Next chat tab key, after you bind it.

Each tab keeps its last 512 lines, and joining a server clears every tab.

## Keys

The chat keys are listed under Vector Point Chat in Options > Controls > Key Binds.

| Key | Default | What it does |
| :--- | :--- | :--- |
| Open chat | Y | Opens the tabbed chat |
| Next chat tab | Not bound | Moves to the next tab |
| Toggle vanilla chat | Not bound | Switches to Minecraft's own chat for this session, or back |

## Switching back to vanilla chat

`/vp chat vanilla` or the Toggle vanilla chat key switches to Minecraft's own chat for the current session.

To switch permanently, edit `config/vector-point/chat.toml` in your game folder:

```toml
[chat]
style = "VANILLA"
```

Set `style` back to `"TOWER"` to get the tabbed window again.
