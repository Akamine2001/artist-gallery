// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://Akamine2001.github.io",
  base: "/artist-gallery/",
  i18n: {
    locales: ["ja", "en", "zh"],
    defaultLocale: "ja",
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: true,
    },
  },
});
