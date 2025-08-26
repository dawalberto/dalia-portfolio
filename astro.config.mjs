// @ts-check
import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "astro/config"

import sitemap from "@astrojs/sitemap"
import { CONFIG } from "./src/config"

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  site: CONFIG.site,
  base: CONFIG.base, // ⚠️ añade esto si tu repo no es la raíz del usuario
  integrations: [sitemap()],
})
