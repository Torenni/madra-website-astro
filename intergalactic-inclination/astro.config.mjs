import { defineConfig } from "astro/config";
import tailwind from "@tailwindcss/vite";

export default defineConfig({
  site: "https://torenni.github.io",
  base: "/madra-website-astro",
  trailingSlash: "always",
  vite: {
    plugins: [tailwind()],
  },
});
