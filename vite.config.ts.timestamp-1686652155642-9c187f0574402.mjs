// vite.config.ts
import { defineConfig } from "file:///C:/Users/Talha/dev/shapla-react-components/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/Talha/dev/shapla-react-components/node_modules/@vitejs/plugin-react/dist/index.mjs";
var toExternal = {
  react: "React",
  "react-dom": "ReactDOM",
  "prop-types": "PropTypes",
  "react-transition-group": "reactTransitionGroup"
};
var vite_config_default = defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true,
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
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxUYWxoYVxcXFxkZXZcXFxcc2hhcGxhLXJlYWN0LWNvbXBvbmVudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXFRhbGhhXFxcXGRldlxcXFxzaGFwbGEtcmVhY3QtY29tcG9uZW50c1xcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvVGFsaGEvZGV2L3NoYXBsYS1yZWFjdC1jb21wb25lbnRzL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcclxuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xyXG5cclxuY29uc3QgdG9FeHRlcm5hbCA9IHtcclxuICByZWFjdDogXCJSZWFjdFwiLFxyXG4gIFwicmVhY3QtZG9tXCI6IFwiUmVhY3RET01cIixcclxuICBcInByb3AtdHlwZXNcIjogXCJQcm9wVHlwZXNcIixcclxuICBcInJlYWN0LXRyYW5zaXRpb24tZ3JvdXBcIjogXCJyZWFjdFRyYW5zaXRpb25Hcm91cFwiLFxyXG59O1xyXG5cclxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBwbHVnaW5zOiBbcmVhY3QoKV0sXHJcbiAgYnVpbGQ6IHtcclxuICAgIHNvdXJjZW1hcDogdHJ1ZSxcclxuICAgIGxpYjoge1xyXG4gICAgICBlbnRyeTogXCJzcmMvaW5kZXgudHNcIixcclxuICAgICAgbmFtZTogXCJTaGFwbGFDb21wb25lbnRcIixcclxuICAgICAgZmlsZU5hbWU6IFwiY29tcG9uZW50c1wiLFxyXG4gICAgICBmb3JtYXRzOiBbXCJlc1wiLCBcInVtZFwiXSxcclxuICAgIH0sXHJcbiAgICByb2xsdXBPcHRpb25zOiB7XHJcbiAgICAgIC8vIG1ha2Ugc3VyZSB0byBleHRlcm5hbGl6ZSBkZXBzIHRoYXQgc2hvdWxkbid0IGJlIGJ1bmRsZWQgaW50byB5b3VyIGxpYnJhcnlcclxuICAgICAgZXh0ZXJuYWw6IE9iamVjdC5rZXlzKHRvRXh0ZXJuYWwpLFxyXG4gICAgICBvdXRwdXQ6IHtcclxuICAgICAgICAvLyBQcm92aWRlIGdsb2JhbCB2YXJpYWJsZXMgdG8gdXNlIGluIHRoZSBVTUQgYnVpbGQgZm9yIGV4dGVybmFsaXplZCBkZXBzXHJcbiAgICAgICAgZ2xvYmFsczogdG9FeHRlcm5hbCxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBMFQsU0FBUyxvQkFBb0I7QUFDdlYsT0FBTyxXQUFXO0FBRWxCLElBQU0sYUFBYTtBQUFBLEVBQ2pCLE9BQU87QUFBQSxFQUNQLGFBQWE7QUFBQSxFQUNiLGNBQWM7QUFBQSxFQUNkLDBCQUEwQjtBQUM1QjtBQUdBLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVMsQ0FBQyxNQUFNLENBQUM7QUFBQSxFQUNqQixPQUFPO0FBQUEsSUFDTCxXQUFXO0FBQUEsSUFDWCxLQUFLO0FBQUEsTUFDSCxPQUFPO0FBQUEsTUFDUCxNQUFNO0FBQUEsTUFDTixVQUFVO0FBQUEsTUFDVixTQUFTLENBQUMsTUFBTSxLQUFLO0FBQUEsSUFDdkI7QUFBQSxJQUNBLGVBQWU7QUFBQTtBQUFBLE1BRWIsVUFBVSxPQUFPLEtBQUssVUFBVTtBQUFBLE1BQ2hDLFFBQVE7QUFBQTtBQUFBLFFBRU4sU0FBUztBQUFBLE1BQ1g7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
