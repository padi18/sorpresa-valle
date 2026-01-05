/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'jury-red': '#8a0303',
				'jury-dark': '#0a0a0a',
				'jury-paper': '#f4e4bc',
			},
			fontFamily: {
				'detective': ['"Special Elite"', 'monospace'],
				'judicial': ['"Cinzel"', 'serif'],
			},
		},
	},
	plugins: [],
};

