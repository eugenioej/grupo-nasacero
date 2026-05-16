import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: 'https://gruponasacero.com',
  output: 'static',

  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap({
      i18n: {
        defaultLocale: 'es',
        locales: {
          es: 'es-MX',
          en: 'en-US',
        },
      },
      changefreq: 'monthly',
      priority: 0.9,
      lastmod: new Date(),
    }),
  ],

  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  vite: {
    build: {
      cssMinify: true,
    },
  },

  adapter: cloudflare()
});