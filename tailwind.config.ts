import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	darkMode: ['selector', ':global(.dark)'],
	mode: 'jit',
	theme: {
		colors: {
			primary: '#0085ff',
			secondary: '#006fff',
			lightBlue: '#69b4ff',

			white: '#FFFFFF',
			gray: '#9e9e9e',
			red: '#ff0000',
			black: '#000',
			green: '#219653',
			orange: '#F2994A',

			dark: {
				black_prime: '#1E1E1E',
				black_secondary: '#2d2d2d',
				black_third: '#454545',
			},
			light: {
				black_prime: '#1d1c1c',
				black_secondary: '#cccbc8',
				black_third: '#f5f4f1',
			},
		},
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
}
export default config

// --primary-100:#c21d03;
// --primary-200:#fd5732;
// --primary-300:#ffb787;
// --accent-100:#393939;
// --accent-200:#bebebe;
// --text-100:#232121;
// --text-200:#4b4848;
// --bg-100:#fbfbfb;
// --bg-200:#f1f1f1;
// --bg-300:#c8c8c8;
