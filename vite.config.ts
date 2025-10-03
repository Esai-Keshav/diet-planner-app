import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"
import tailwindcss from "@tailwindcss/vite"
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),
  VitePWA({
    registerType: "autoUpdate",
    manifest: {
      name: "Diet Planner App",
      short_name: "Diet App",
      start_url: "/diet-planner-app/",
      display: "standalone",
      theme_color: "#ffffff",
      background_color: "#ffffff",
      icons: [
        // {
        //   "src": "/diet-planner-app/icons/icon-192.png",
        //   "sizes": "192x192",
        //   "type": "image/png",
        //   // "purpose": "any"
        // },
        {
          "src": "/diet-planner-app/icons/icon-512.png",
          "sizes": "512x512",
          "type": "image/png",
          "purpose": "any maskable "
        }
      ],
    },
    workbox: {
      globPatterns: ["**/*.{js,css,html,ico,png,svg,webp,json}"],
    },
  })],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  }, server: {
    host: "0.0.0.0",
    port: 5173,
  },

  base: "/diet-planner-app/",
})
