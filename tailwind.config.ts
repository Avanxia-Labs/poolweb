// tailwind.config.mjs
import { type Config } from 'tailwindcss'

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}', // si estás usando App Router
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)'], // Define la clase 'font-inter',
        poppins: ['var(--font-poppins)'],
        foster: ['Foster', 'cursive'],
        kanit: ['var(--font-kanit)'],
        plus_jakarta_sans: ['var(--font-plus_jakarta_sans)'],
        montserrat: ['var(--font-montserrat)']
      },
      blur: {
        '7.95': '7.95px',
      },
      screen:{
        '3xl': '2000px' 
      }
      
    },
  },
  plugins: [],
} satisfies Config
