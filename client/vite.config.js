import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ["js-big-decimal"],
  },
  server: {
    port: 8000,
  },
  resolve: {
    alias: {
      assets:"/src/assets",
      components: "/src/components",
      mockData:"/src/data",
      features:"/src/features",
      pages: "/src/pages",
      theme: "/src/theme",
      utils: "/src/utils",
    },
  },
});
