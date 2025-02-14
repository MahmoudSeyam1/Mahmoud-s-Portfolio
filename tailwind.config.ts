// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",        // Scan all files in src directory
    "./pages/**/*.{js,ts,jsx,tsx}",      // Include Next.js pages
    "./components/**/*.{js,ts,jsx,tsx}", // Explicit components path
    "./public/**/*.html"                  // For any HTML files in public
  ],
  theme: {
    extend: {
      colors: {
        // Add your custom color palette
        'portfolio-blue': '#2563eb',     // Your blue-600 equivalent
        'portfolio-dark': '#1f2937',     // Your gray-800 equivalent
        'portfolio-bg': '#111827'        // Your gray-900 equivalent
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],   // Default font stack
        mono: ['Fira Code', 'monospace'] // Code snippets font
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')   // Optional: prose styling
  ],
  // For dark mode class-based toggling
  darkMode: 'class'
};