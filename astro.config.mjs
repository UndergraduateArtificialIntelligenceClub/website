import { astroImageTools } from 'astro-imagetools'
import compress from 'astro-compress'
import { defineConfig } from 'astro/config'
import image from '@astrojs/image'
import purgecss from 'astro-purgecss'
import sitemap from "@astrojs/sitemap"
import vue from '@astrojs/vue'

// https://astro.build/config
export default defineConfig({
  integrations: [
    image({
      serviceEntryPoint: '@astrojs/image/sharp'
    }),
    vue(),
    astroImageTools,
    sitemap(),
    purgecss({ safelist: [/^.fc/, '#calendar'] }),
    compress(),
  ],
  site: "https://uais.dev",
  output: 'static'
});
