import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        arcade: ['"Press Start 2P"', 'monospace'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui']
      },
      boxShadow: {
        'arcade-red': '0 6px 0 #7f1d1d, 0 0 20px rgba(220,38,38,.3)',
        'card-deck': '0 10px 0 #0a0a0b'
      },
      colors: {
        bg: '#0b0b0c',
        panel: '#121214',
        panel2: '#1a1b1e'
      }
    }
  },
  plugins: [],
} satisfies Config