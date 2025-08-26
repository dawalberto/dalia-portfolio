// @ts-check
import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "astro/config"

import sitemap from "@astrojs/sitemap"

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  // site: "https://dalialopezrubio.com/",
  site: "https://dawalberto.github.io/",
  base: "/dalia-portfolio/", // ⚠️ añade esto si tu repo no es la raíz del usuario
  integrations: [sitemap()],
})
