---
description: Values from The Ecosystem that FancyMenu layouts can display.
---

# FancyMenu placeholders

With [FancyMenu](https://modrinth.com/mod/fancymenu) installed, `vp-network` adds placeholders that layouts can display on any screen. They are listed under the Vector Point category in FancyMenu's placeholder picker, and you can also type them directly:

```json
{"placeholder":"vp_network_version"}
```

The placeholders are added while `registerPlaceholders` is on in [`menu.toml`](/admins/configuration#menu).

| Placeholder | Shows |
| :--- | :--- |
| `vp_network_version` | The version of the `vp-network` jar |
| `vp_modules` | The modules that loaded, separated by commas |
| `vp_agc_state` | The coordinator connection state: `DISABLED`, `DISCONNECTED`, `CONNECTING`, `AUTHENTICATING`, `READY` or `BACKOFF` |
| `vp_chat_unread` | The number of unread messages across all chat tabs. Needs `vp-chat` |
| `vp_chat_tab` | The selected chat tab: `global`, `local`, `event` or `draft`. Needs `vp-chat` |
