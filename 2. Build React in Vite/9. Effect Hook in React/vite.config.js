import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  RollupOptions: {
    input: {
      main: "index.html",
      dependency: "dependency.html",
      async: "async.html",
    },
  },
});
