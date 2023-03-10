import { defineConfig } from "astro/config";
import { remarkReadingTime } from './remark-reading-time.mjs';
import mdx from '@astrojs/mdx';
import preact from "@astrojs/preact";
import react from '@astrojs/react';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [remarkReadingTime],
    extendDefaultPlugins: true,
    drafts: true
  },
  integrations: [mdx({
    drafts: true
  }), [preact()], tailwind(), react()]
});