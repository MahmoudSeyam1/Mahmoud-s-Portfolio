// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'portfolio-blue': '#2563eb',
        'portfolio-dark': '#1f2937',
        'portfolio-bg': '#111827'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace']
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'), // Scrollbar plugin
    require('@tailwindcss/forms'), // Forms plugin
    require('@tailwindcss/typography')
  ],
  darkMode: 'class'
};

export default config;