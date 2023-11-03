import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: { 
      colors: {
        primary: "#0f1112"
      }
    },
  },
  plugins: [],
} satisfies Config

