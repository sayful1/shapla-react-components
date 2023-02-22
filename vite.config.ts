import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const toExternal = {
  "react": "React",
  "react-dom": "ReactDOM",
  "prop-types": "PropTypes",
  "react-transition-group": "reactTransitionGroup"
};

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
      formats: ["es", "umd"]
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled into your library
      external: Object.keys(toExternal),
      output: {
        // Provide global variables to use in the UMD build for externalized deps
        globals: toExternal
      }
    }
  }
});
