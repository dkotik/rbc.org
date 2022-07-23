import { defineConfig } from "astro/config";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: "https://russianbiblechurch.org",
  outDir: "docs",
  // trailingSlash: "never",
  server: {
    port: 8081
  },
  build: {
    format: "file"
  },
  integrations: [svelte()]
});
