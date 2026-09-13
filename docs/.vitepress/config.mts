import { defineConfig } from 'vitepress'

const repo = 'https://github.com/HexagonUBI/vp_documentation'
const site = 'https://wiki.simplefox.studio'
const siteTitle = 'The Ecosystem'
const siteDescription = 'Documentation for The Ecosystem, the VectorPoint mod family: chat, Pixel Maps and the library they share.'
const brand = '#ff73e5'

export default defineConfig({
  lang: 'en-US',
  title: siteTitle,
  description: siteDescription,
  cleanUrls: true,
  lastUpdated: true,
  appearance: 'dark',
  sitemap: { hostname: site },
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico', sizes: '16x16 32x32 64x64' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '64x64', href: '/favicon-64.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
    ['link', { rel: 'manifest', href: '/site.webmanifest' }],
    // Discord colours the side of a link embed with theme-color.
    ['meta', { name: 'theme-color', content: brand }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: siteTitle }],
    ['meta', { property: 'og:locale', content: 'en_US' }],
    ['meta', { property: 'og:image', content: `${site}/og.png` }],
    ['meta', { property: 'og:image:type', content: 'image/png' }],
    ['meta', { property: 'og:image:width', content: '1200' }],
    ['meta', { property: 'og:image:height', content: '630' }],
    ['meta', { property: 'og:image:alt', content: 'The Ecosystem: mods for the VectorPoint server' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:image', content: `${site}/og.png` }],
  ],
  transformHead({ pageData }) {
    if (pageData.isNotFound) return
    const path = pageData.relativePath.replace(/(^|\/)index\.md$/, '$1').replace(/\.md$/, '')
    const url = `${site}/${path}`
    const title = pageData.relativePath === 'index.md' ? siteTitle : pageData.title
    const description = pageData.description || siteDescription
    return [
      ['link', { rel: 'canonical', href: url }],
      ['meta', { property: 'og:url', content: url }],
      ['meta', { property: 'og:title', content: title }],
      ['meta', { property: 'og:description', content: description }],
      ['meta', { name: 'twitter:title', content: title }],
      ['meta', { name: 'twitter:description', content: description }],
    ]
  },
  themeConfig: {
    logo: { src: '/logo.png', alt: '' },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Documentation', link: '/start/installing', activeMatch: '^/(start|players|admins|reference)/' },
      { text: 'Roadmap', link: '/roadmap' },
    ],
    sidebar: [
      {
        text: 'Getting started',
        items: [
          { text: 'Installing', link: '/start/installing' },
          { text: 'Commands', link: '/start/commands' },
        ],
      },
      {
        text: 'Players',
        items: [
          { text: 'Chat', link: '/players/chat' },
          { text: 'Using the map', link: '/players/using-the-map' },
          { text: 'Places and streetviews', link: '/players/places-and-streetviews' },
        ],
      },
      {
        text: 'Server admins',
        items: [
          { text: 'Running Pixel Maps', link: '/admins/running-pixel-maps' },
          { text: 'Configuration', link: '/admins/configuration' },
          { text: 'Roles and data', link: '/admins/roles-and-data' },
          { text: 'Territories and towns', link: '/admins/territories' },
        ],
      },
      {
        text: 'Reference',
        items: [
          { text: 'FancyMenu placeholders', link: '/reference/fancymenu' },
          { text: 'Roadmap', link: '/roadmap' },
        ],
      },
    ],
    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/mpH3RJBssw', ariaLabel: 'Discord' },
      { icon: 'github', link: 'https://github.com/HexagonUBI', ariaLabel: 'GitHub' },
      { icon: 'trello', link: 'https://trello.com/b/2Pxq0v1X/vector-point', ariaLabel: 'Trello board' },
      { icon: 'kofi', link: 'https://ko-fi.com/simplefox', ariaLabel: 'Ko-fi' },
    ],
    editLink: { pattern: `${repo}/edit/main/docs/:path`, text: 'Edit this page on GitHub' },
    search: { provider: 'local' },
    outline: { level: [2, 3], label: 'On this page' },
    lastUpdated: { text: 'Last updated' },
  },
})
