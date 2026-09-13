---
title: FancyMenu placeholders
description: Network values Vector Point exposes to FancyMenu layouts.
sidebar:
  order: 1
---

With [FancyMenu](https://modrinth.com/mod/fancymenu) installed, `vp-network` adds
placeholders that layouts can show on any screen. They sit in FancyMenu's placeholder
picker under the **Vector Point** category, or can be typed as:

```json
{"placeholder":"vp_network_version"}
```

They are registered as long as `registerPlaceholders` is on in
[`menu.toml`](/admins/configuration/#menu).

| Placeholder | Shows |
| :--- | :--- |
| `vp_network_version` | The version of the `vp-network` jar |
| `vp_modules` | The Vector Point modules that loaded, comma separated |
| `vp_agc_state` | The coordinator connection: `DISABLED`, `DISCONNECTED`, `CONNECTING`, `AUTHENTICATING`, `READY` or `BACKOFF` |
| `vp_chat_unread` | Unread messages across every chat tab. Needs `vp-chat` |
| `vp_chat_tab` | The selected chat tab: `global`, `local`, `event` or `draft`. Needs `vp-chat` |
