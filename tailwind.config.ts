import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				standardColor: '#191919', // Replace with your color
			},
			backgroundImage: {
				logo: "url('/static/SCLogo.png')",
			},
			fontFamily: {
				futura: ['Futura PT', 'sans-serif']
			},
			backgroundSize:{
				'50%': '60%'
			}
		},
	},

	plugins: [
		typography,
		forms,
		containerQueries,
		function ({ addUtilities }) {
			addUtilities({
				'.jebemTiMajku': {
					'clip-path': 'polygon(0% 0%, 100% 100%)',
				},
			});
		},
	],
} satisfies Config;
