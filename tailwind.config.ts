import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        stone: {
          50: '#fafaf9', 100: '#f5f5f4', 200: '#e7e5e4', 700: '#44403c',
          800: '#292524', 900: '#1c1917',
        },
        amber: {
          50: '#fffbeb', 500: '#f59e0b', 600: '#d97706', 900: '#78350f',
        },
      },
    },
  },
  plugins: [],
}

export default config
