import { defineConfig } from 'vite';

export default defineConfig({
  base: '/Confeitaria/',
  root: '.',
  build: {
    outDir: 'dist',  // Diretório de saída
    rollupOptions: {
      input: {
        main: './home.html',  // Página principal
      }
    }
  },
  server: {
    port: 5005,
    open: '/Confeitaria/home.html'  // Abre o arquivo home.html quando o servidor iniciar
  }
});
