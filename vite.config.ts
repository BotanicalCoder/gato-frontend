import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true
      }
    }
  }
})

// Vitest config
export const test = {
  globals: true,
  environment: 'jsdom',
  setupFiles: ['./src/tests/setupTests.ts'],
  css: true,
  server: { deps: { inline: ['@testing-library/jest-dom'] } },
}

// Vitest coverage
export const coverage = {
  provider: 'v8',
  reporter: ['text', 'html', 'lcov'],
  reportsDirectory: './coverage'
}
