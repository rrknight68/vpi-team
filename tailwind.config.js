/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'vpi-navy': '#0D2B4E',
        'vpi-navy-deep': '#081B33',
        'vpi-gold': '#C89A3A',
        'vpi-gold-light': '#E0B964',
        'vpi-cream': '#F9F7F3',
        'vpi-stone': '#E8E4DB',
        'vpi-graphite': '#2A2A2A',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        label: ['Cinzel', 'serif'],
        mono: ['"DM Mono"', 'monospace'],
        body: ['Lora', 'serif'],
      },
      maxWidth: {
        '8xl': '88rem',
      },
    },
  },
  plugins: [],
}
