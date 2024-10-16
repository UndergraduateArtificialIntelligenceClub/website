import { astroImageTools } from 'astro-imagetools'
import compress from 'astro-compress'
import compressor from 'astro-compressor'
import { defineConfig } from 'astro/config'
import purgecss from 'astro-purgecss'
import sitemap from '@astrojs/sitemap'
import vue from '@astrojs/vue'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import mdx from '@astrojs/mdx'

// https://astro.build/config
export default defineConfig({
  integrations: [
    vue(),
    astroImageTools,
    sitemap(),
    purgecss({ safelist: [/^.fc/, '#calendar'] }),
    compress(),
    compressor(),
    mdx({
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex],
    }),
  ],
  site: 'https://uais.dev',
  output: 'static',
});
