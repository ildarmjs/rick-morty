import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA({
    manifest: {
      display: 'standalone',
      name: 'pwa-example',
      short_name: 'ex-pwa',
      description: 'It is expample pwa',
      theme_color: '#ffffff',
      icons: [
        {
          src: '/icons-pwa/android-chrome-192x192.png',
          sizes: '192x192',
          type: 'image/png',
          purpose: 'favicon'
        },
        {
          src: '/icons-pwa/android-chrome-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'favicon'
        },
        {
          src: '/icons-pwa/apple-touch-icon.png',
          sizes: '180x180',
          type: 'image/png',
          purpose: 'apple touch icon',
        },
        {
          src: '/icons/icon-144x144.png',
          sizes: '144x144',
          type: 'image/png',
          purpose: 'any maskable'
        },
      ]
    },
  })],
})



