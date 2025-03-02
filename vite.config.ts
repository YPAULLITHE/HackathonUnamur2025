import { defineConfig } from "vite"
import { VitePWA } from "vite-plugin-pwa"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      injectRegister: "auto",
      devOptions: { enabled: true },
      manifest: {
        name: "ENamurEve",
        short_name: "",
        description: "Allows you to pin custom text to your notifications",
        theme_color: "#14b8a5",
        icons: [
          {
            src: "/src/icon.png",
            sizes: "192x192",
            type: "image/png",
          }
        ],
      },
    }),
  ],
})
