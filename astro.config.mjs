import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // IMPORTANT: set this to the real domain once it's live (used for SEO,
  // sitemap, canonical URLs and social share images).
  site: 'https://ellamariagrosz.github.io',
  base: '/',
  integrations: [sitemap()],
  build: {
    outDir: 'dist',
  },
});
