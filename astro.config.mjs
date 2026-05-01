// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://hugheyllc.com',
  output: 'static',
  adapter: vercel({
    functionPerRoute: true,
  }),
  integrations: [
    sitemap({
      filter: (page) => !page.includes('privacy-policy'),
    }),
    tailwind(),
  ],
});
