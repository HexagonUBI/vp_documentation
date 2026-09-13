import { defineConfig } from 'vitepress'

const repo = 'https://github.com/HexagonUBI/vp_documentation'

export default defineConfig({
  lang: 'en-US',
  title: 'The Ecosystem',
  description: 'Documentation for The Ecosystem, the VectorPoint mod family: chat, Pixel Maps and the library they share.',
  cleanUrls: true,
  lastUpdated: true,
  appearance: 'dark',
  sitemap: { hostname: 'https://wiki.simplefox.studio' },
  head: [
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '64x64', href: '/favicon-64.png' }],
    ['meta', { name: 'theme-color', content: '#1b1b1f' }],
  ],
  themeConfig: {
    logo: { src: '/logo.png', alt: '' },
    nav: [
      { text: 'Docs', link: '/start/installing', activeMatch: '^/(start|players|admins|reference)/' },
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
    socialLinks: [{ icon: 'github', link: repo }],
    editLink: { pattern: `${repo}/edit/main/docs/:path`, text: 'Edit this page on GitHub' },
    search: { provider: 'local' },
    outline: { level: [2, 3], label: 'On this page' },
    lastUpdated: { text: 'Last updated' },
  },
})
