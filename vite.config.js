import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import NodeGlobalsPolyfillPlugin from '@esbuild-plugins/node-globals-polyfill';

export default () => {
	return defineConfig({
		plugins: [react()],
		server: {
			port: 4000,
			watch: {
				usePolling: true,
			},
			// host: "0.0.0.0"
		},
		optimizeDeps: {
			esbuildOptions: {
				// Node.js global to browser globalThis
				define: {
					global: 'globalThis',
				},
				// Enable esbuild polyfill plugins
				plugins: [
					NodeGlobalsPolyfillPlugin({
						buffer: true,
						process: true,
					}),
				],
			},
		},
		build: {
			chunkSizeWarningLimit: 500,
		},
	});
};
