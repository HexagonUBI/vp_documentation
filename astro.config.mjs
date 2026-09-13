// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const repo = 'https://github.com/HexagonUBI/vp_documentation';

export default defineConfig({
	site: 'https://wiki.simplefox.studio',
	integrations: [
		starlight({
			title: 'VectorPoint Wiki',
			description: 'Documentation for the Vector Point network mods: chat, Pixel Maps and the library they share.',
			logo: { src: './src/assets/vectorpoint-logo.png', alt: 'VectorPoint', replacesTitle: true },
			favicon: '/favicon.png',
			customCss: ['./src/styles/custom.css'],
			social: [{ icon: 'github', label: 'GitHub', href: repo }],
			editLink: { baseUrl: `${repo}/edit/main/` },
			lastUpdated: true,
			sidebar: [
				{ label: 'Getting started', items: [{ autogenerate: { directory: 'start' } }] },
				{ label: 'Players', items: [{ autogenerate: { directory: 'players' } }] },
				{ label: 'Server admins', items: [{ autogenerate: { directory: 'admins' } }] },
				{ label: 'Reference', items: [{ autogenerate: { directory: 'reference' } }] },
				{ label: 'Roadmap', slug: 'roadmap' },
			],
		}),
	],
});
