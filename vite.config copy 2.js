// import { RollupBabelInputPluginOptions, babel } from "@rollup/plugin-babel";
// import resolve from "@rollup/plugin-node-resolve";
// import summary from "rollup-plugin-summary";
// import commonjs from "@rollup/plugin-commonjs";
// import { terser } from "rollup-plugin-terser";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// const babelConfig = {
// 	plugins: [],
// 	exclude: "node_modules/**",
// 	babelrc: false,
// 	presets: [
// 		[
// 			"@babel/preset-env",
// 			{
// 				targets: {
// 					browsers: "chrome >= 62"
// 				},
// 				useBuiltIns: "usage",
// 				corejs: "3"
// 			}
// 		]
// 	]
// };

// https://vitejs.dev/config/
export default () => {
  return defineConfig({
    plugins: [react()],
    server: {
      port: 5000,
      // host: "0.0.0.0"
    },
    build: {
      // target: "es2020",
      // commonjsOptions: {
      // 	sourceMap: false
      // },
      chunkSizeWarningLimit: 500,
      rollupOptions: {
        input: [
          "src/index.jsx",
          "src/components/THREE/gaming/Game.jsx",
          //   "src/components/THREE/controls",
          //   "src/components/THREE/menu",
        ],
        output: {
          format: "es",
          strict: false,
          chunkFileNames: `[name].[hash].js`,
          entryFileNames: "[name].bundle.js",
          dir: "dist",
        },
        // plugins: [
        // Resolve bare module specifiers to relative paths
        // resolve({
        // 	browser: true
        // }),
        // commonjs({
        // 	sourceMap: false
        // }),
        // babel config
        // babel(babelConfig),
        // Minify JS
        // terser({
        // 	format: {
        // 		comments: false
        // 	},
        // 	compress: false,
        // 	module: true
        // }),
        // Print bundle summary
        // summary({})
        // ]
      },
    },
  });
};
