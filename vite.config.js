import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://vicduraznito.github.io/PROME', // Configura la base si tu proyecto está en una subcarpeta de GitHub Pages
  assetsInclude: ['**/*.JPG', '**/*.jpg']
});


