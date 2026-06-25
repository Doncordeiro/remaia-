// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: 'pt',
    locales: ['pt', 'es', 'en', 'fr', 'de'],
    routing: {
      // PT lives at the root (/), the others at /es/, /en/, /fr/, /de/
      prefixDefaultLocale: false,
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
