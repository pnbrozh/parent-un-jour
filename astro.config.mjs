// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://parentunjour.ca',
  trailingSlash: 'always',

  build: {
    format: 'directory',
  },

  integrations: [sitemap()],
});