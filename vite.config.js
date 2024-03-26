import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import glob from "glob";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true,
    rollupOptions: {
      input: glob.sync("./src/*.html"),
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor";
          }
        },
        entryFileNames: "commonHelpers.js",
      },
    },
    outDir: "../dist",
  },
});
