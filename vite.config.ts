import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://maps.googleapis.com/maps/api",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  build: {
    outDir: 'dist', // Vérifiez que vous avez le bon dossier de sortie
    sourcemap: true, // Si vous avez besoin de sourcemaps pour le débogage
  },
});