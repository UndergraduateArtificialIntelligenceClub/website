// --- File: astro.config.mjs ---

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
    // We are adding 'is-open' to the safelist. This tells PurgeCSS to NEVER remove
    // this class, which is essential because it's added dynamically by our JavaScript
    // to show the submenus. Without this, PurgeCSS removes the CSS for it.
    purgecss({ 
        safelist: [/^navbar/, 'is-active', 'has-dropdown', 'is-hoverable', 'is-boxed', 'burger', 'is-open'] 
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