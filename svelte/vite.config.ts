import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { resolve } from 'path';

export default defineConfig({
  // Emit asset URLs relative to the file referencing them. The default ('/')
  // writes bundle.css's font URLs as /assets/…, but the bundle is served from
  // /svelte/, so every KaTeX font 404s — and the GH Pages deploy adds a
  // further /disturbed-circles prefix. Relative URLs are correct under both.
  base: './',
  plugins: [svelte()],
  build: {
    outDir: resolve(__dirname, '../static/svelte'),
    emptyOutDir: true,
    // One stylesheet, at a stable path, so a Zola template can <link> it.
    // (With splitting on, the CSS lands under a content hash that nothing
    // references, and KaTeX renders unstyled.)
    cssCodeSplit: false,
    rollupOptions: {
      input: resolve(__dirname, 'src/main.ts'),
      output: {
        entryFileNames: 'main.js',
        chunkFileNames: 'chunks/[name]-[hash].js',
        assetFileNames: (info) => {
          const name = info.names?.[0] ?? '';
          // Fonts etc. keep their hashes; the single bundle does not.
          return name.endsWith('.css') ? 'bundle.css' : 'assets/[name]-[hash][extname]';
        }
      }
    }
  }
});
