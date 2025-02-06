import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', 
  server: {
    port: process.env.PORT || 4173, // Usa el puerto de Railway o el predeterminado de Vite
    host: true // Permite que Railway acceda a la app
  },
  assetsInclude: ['**/*.JPG', '**/*.jpg', '**/*.png', '**/*.gif', '**/*.svg']
});

