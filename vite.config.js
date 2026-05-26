import { defineConfig } from 'vite';
import purgecss from 'vite-plugin-purgecss';

export default defineConfig({
  plugins: [
    purgecss({
      content: ['./index.html', './src/**/*.js'],
      safelist: {
        standard: [
          'fade-out', 'preloader-done', 'video-ready', 'content-ready', 'app-ready',
          'active', 'playing', 'visible', 'reveal', 'is-home-route', 'admin-mode'
        ],
        deep: [
          /spotify-/, /player-/, /wa-/, /quiz-/, /admin-/
        ]
      }
    })
  ],
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('@supabase/supabase-js')) {
            return 'supabase';
          }
        }
      }
    }
  }
});
