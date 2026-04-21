// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://parentunjour.ca',
  base: '/parent-un-jour',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
});
