import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		port: 5000,
	},
	// build: {
	//   rollupOptions: {
	//     // https://rollupjs.org/guide/en/#big-list-of-options
	//   },
	//   chunkSizeWarningLimit: {
	//     // https://rollupjs.org/guide/en/#big-list-of-options
	//   },
	// },
});
