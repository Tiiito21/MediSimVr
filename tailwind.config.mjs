/** @type {import('tailwindcss').Config} */

import animations from '@midudev/tailwind-animations'

export default {
	content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'
  ],
	theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto Mono', 'sans-serif'],
      },
      colors:{
        'primary': { DEFAULT: '#022b3a', 100: '#00090c', 200: '#011218', 300: '#011a23', 400: '#02232f', 500: '#022b3a', 600: '#056c92', 700: '#08ade8', 800: '#52ccf9', 900: '#a8e6fc' },
        'teal': { DEFAULT: '#1f7a8c', 100: '#06191c', 200: '#0c3139', 300: '#134a55', 400: '#196372', 500: '#1f7a8c', 600: '#2bacc5', 700: '#59c5db', 800: '#91d8e7', 900: '#c8ecf3' },
        'columbia': { DEFAULT: '#bfdbf7', 100: '#0a2c4e', 200: '#13589c', 300: '#2384e4', 400: '#71afed', 500: '#bfdbf7', 600: '#cce2f9', 700: '#d9eafa', 800: '#e6f1fc', 900: '#f2f8fd' },
        'lavender': { DEFAULT: '#e1e5f2', 100: '#1c2542', 200: '#384a83', 300: '#5f74ba', 400: '#a1add7', 500: '#e1e5f2', 600: '#e8ebf5', 700: '#eef0f8', 800: '#f4f5fa', 900: '#f9fafd' }, 
        }
    }
  },
	plugins: [
    animations
  ],
}


