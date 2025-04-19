import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://ayungavis.com',
  integrations: [tailwind(), sitemap()],
  output: 'server',
  adapter: vercel({
    analytics: true,
  }),
});
