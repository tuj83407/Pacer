import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  build: {
    
    plugins: [react()], 
    outDir: 'dist', // Keep the default 'dist' folder for separation
    assetsDir: 'assets', // Store JS and CSS in the 'assets' folder
  },
  base: '/', // Ensure relative paths in the app
});