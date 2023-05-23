/** @type {import('tailwindcss').Config} */

export default {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}',
	],
	theme: {
		extend: {},
		fontFamily: {
			display: ['"Luckiest Guy"', 'sans-serif'],
			sans: ['"Open Sans"', 'sans-serif'],
		},
	},
	plugins: [require('flowbite/plugin'), require('@tailwindcss/forms')],
	darkMode: 'class',
};
