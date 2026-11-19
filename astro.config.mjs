import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: "https://escalandres-portfolio.vercel.app",
  integrations: [tailwind()],
  output: "server",
  adapter: vercel(),
});
