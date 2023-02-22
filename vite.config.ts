import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import pkg from "./package.json";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true,
    target: "esnext",
    lib: {
      entry: "src/index.ts",
      name: "ShaplaComponent",
      fileName: "components",
      formats: ["es", "umd"],
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled into your library
      external: Object.keys(pkg.dependencies || {}),
      output: {
        // Provide global variables to use in the UMD build for externalized deps
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "prop-types": "PropTypes",
          "react-transition-group": "reactTransitionGroup",
        },
      },
    },
  },
});
