# vp_documentation

Documentation for The Ecosystem, the VectorPoint mod family, published at
https://wiki.simplefox.studio.

The site is built with [VitePress](https://vitepress.dev). Every push to `main` runs
`.github/workflows/deploy.yml`, which builds it and publishes it to GitHub Pages.

## Working on it

You need Node 18 or newer.

```bash
npm install
npm run dev
```

The dev server prints a local address to open. `npm run build` runs the same build as
the deploy and stops on a broken page, so run it before pushing.

Pages are Markdown files under `docs/`. The sidebar and top navigation are set in
`docs/.vitepress/config.mts`, so a new page also needs an entry there. Images and other
static files go in `docs/public/`.

## Content rules

- Take command names, permission levels, config keys and defaults from the mod source.
  The internal notes have drifted from the code before.
- Leave out anything about how the live server is hosted: addresses, logins, paths on
  the host, panel details and backup locations. Examples use `example.com`.
- Describe features that are not built yet only on the roadmap page.
- Keep the text ASCII: `grep -rnP '[^\x00-\x7F]' docs --include='*.md'`.
