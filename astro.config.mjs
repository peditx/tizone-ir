import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://tizone.ir',
  output: 'static',
  // Prevent Cloudflare from auto-adding adapter
  server: { host: true },
});
