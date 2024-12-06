import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Esto asegura que las rutas relativas sean correctas en desarrollo
  assetsInclude: ['**/*.JPG', '**/*.jpg']
});


// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   base: 'https://vicduraznito.github.io/PROME/'
// })

