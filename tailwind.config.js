/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: { ink: '#14161a', paper: '#f7f8f6', cyan: '#00D4FF', mint: '#00E676' },
      fontFamily: {
        display: ['Audiowide', 'Orbitron', 'sans-serif'],
        mono: ['"Space Mono"', '"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
}
