import { defineConfig } from "astro/config";
import { remarkReadingTime } from './remark-reading-time.mjs';

// https://astro.build/config
import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  integrations: [preact()],

  markdown: {
    remarkPlugins: [remarkReadingTime],
    extendDefaultPlugins: true,
  },


});