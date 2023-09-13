import { astroImageTools } from 'astro-imagetools'
import compress from 'astro-compress'
import compressor from 'astro-compressor'
import { defineConfig } from 'astro/config'
import purgecss from 'astro-purgecss'
import sitemap from "@astrojs/sitemap"
import vue from '@astrojs/vue'

// https://astro.build/config
export default defineConfig({
  integrations: [
    vue(),
    astroImageTools,
    sitemap(),
    purgecss({ safelist: [/^.fc/, '#calendar'] }),
    compress(),
    compressor()
  ],
  site: "https://uais.dev",
  output: 'static'
});
