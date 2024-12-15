import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';


/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	kit: {
		adapter: adapter({
			strict:false,
			fallback: 'index.html', // Add this line to handle client-side routing
		}),
		prerender: {
			default: true, // Pre-render all pages by default
		  },
	},
	preprocess: vitePreprocess({
		postcss: true,
		typescript: true,
	}),

};

export default config;


