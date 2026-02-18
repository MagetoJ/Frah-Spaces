import path from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { cloudflare } from "@cloudflare/vite-plugin";
import { mochaPlugins } from "@getmocha/vite-plugins";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
	  plugins: [
	    ...mochaPlugins(process.env as Record<string, string | undefined>),
	    react(),
	    cloudflare({
	      auxiliaryWorkers: [],
	    }),
	  ],
	  server: {
	    allowedHosts: true,
	  },
  build: {
    chunkSizeWarningLimit: 5000,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
