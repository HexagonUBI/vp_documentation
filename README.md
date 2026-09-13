# wiki.simplefox.studio

Public documentation for the Vector Point network mods, published at
https://wiki.simplefox.studio.

Built with [Starlight](https://starlight.astro.build) and deployed to GitHub Pages by
`.github/workflows/deploy.yml` on every push to `main`.

## Working on it

Needs Node 22.12 or newer.

```bash
npm install
npm run dev
```

The site is at http://localhost:4321. `npm run build` does what the deploy does and
fails on a broken page, so run it before pushing.

Pages are Markdown under `src/content/docs/`. The folder a page sits in decides its
sidebar group, and `sidebar.order` in its frontmatter decides where in the group it
goes. Groups themselves are listed in `astro.config.mjs`.

## What goes in

- **The code is the source of truth.** Command names, permission levels, config keys
  and defaults are read out of the mod source, not copied from notes. The internal
  notes have drifted from the code more than once.
- **Nothing about how the live server is run.** No host addresses, logins, paths on
  the host, panel details or backup locations. Only published domains appear here.
- **ASCII only**, so the text is typeable and greppable:
  `grep -rnP '[^\x00-\x7F]' src/content`.
