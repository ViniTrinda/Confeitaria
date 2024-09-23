import { defineConfig } from "vite";

export default defineConfig({
  base: "/Confeitaria/",
  root: ".",
  build: {
    outDir: "dist", // Diretório de saída
    rollupOptions: {
      input: {
        main: "./index.html", // Página principal
      },
    },
  },
  server: {
    port: 5005,
  },
});
