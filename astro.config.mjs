import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
  integrations: [vue(), sitemap()],
  site: "https://uais.dev",
  output: 'static'
});
