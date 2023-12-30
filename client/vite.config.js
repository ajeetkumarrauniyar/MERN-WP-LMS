import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const __filename = import.meta.url;
const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ["js-big-decimal"],
  },
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      // "@utils": path.resolve(__dirname, "src/utils"),
      "@data": path.resolve(__dirname, "src/data"),
    },
  },
  server: {
    port: 8000,
  },
  
});
