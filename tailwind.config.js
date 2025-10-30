export default {
  darkMode: 'class', // enables manual control via a CSS class
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        mint: '#1db256',
        lightBg: '#f7f9fb',
        darkBg: '#232323ff',
        lightCard: '#ffffff',
        darkCard: '#2a2a2a',
        lightBorder: '#e5e7eb',
        darkBorder: '#3a3a3a',
        lightText: '#1a1a1a',
        darkText: '#f2f2f2',
      },
      fontFamily: {
        sans: ['Montserrat', 'Hind', 'sans-serif'],
      },
      fontWeight: {
        normal: 500,
        medium: 600,
        bold: 700,
      },
    },
  },
  plugins: [],
}
