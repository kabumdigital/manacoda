import { defineConfig } from '@tanstack/react-start/config'

export default defineConfig({
  nitro: {
    // Ensure Nitro targets Vercel's build/runtime for proper routing
    preset: 'vercel',
  },
})
