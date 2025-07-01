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
    // --- MODIFIED ---
    // We are giving PurgeCSS a "safelist" of classes to NEVER remove.
    // This regular expression /^navbar/ tells it to keep all classes that start with "navbar".
    purgecss({ 
        safelist: [/^navbar/, 'is-active', 'has-dropdown', 'is-hoverable', 'is-boxed', 'burger'] 
    }),
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