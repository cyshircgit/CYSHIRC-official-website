import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	build: {
		target: 'es2022',
		minify: 'terser',
		terserOptions: {
			compress: {
				drop_console: true,
				drop_debugger: true,
			},
		},
		rollupOptions: {
			output: {
				manualChunks(id) {
					if (id?.includes('@tabler/icons-svelte')) return 'icons';
					if (id?.includes('svelte')) return 'svelte';
					if (
						id?.includes('node_modules') &&
						!id.includes('marked') &&
						!id.includes('highlight.js')
					) {
						return 'vendor';
					}
				},
			},
		},
	},
	server: {
		fs: {
			allow: ['..'],
		},
	},
});
