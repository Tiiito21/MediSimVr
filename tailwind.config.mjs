/** @type {import('tailwindcss').Config} */

import animations from '@midudev/tailwind-animations'

export default {
	content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './node_modules/flowbite/**/*.js'
  ],
	theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto Mono', 'sans-serif'],
      },
      colors: 
        { 'footer': { DEFAULT: '#0d0221', 100: '#030007', 200: '#05010d', 300: '#080114', 400: '#0a021b', 500: '#0d0221', 600: '#30077b', 700: '#530cd5', 800: '#874cf5', 900: '#c3a5fa' },
          'dark_primary': { DEFAULT: '#0f084b', 100: '#03020f', 200: '#06031e', 300: '#09052c', 400: '#0b063b', 500: '#0f084b', 600: '#1d1097', 700: '#2d18e5', 800: '#7264ef', 900: '#b8b1f7' },
          'primary': { DEFAULT: '#26408b', 100: '#080d1c', 200: '#0f1a38', 300: '#172654', 400: '#1f3370', 500: '#26408b', 600: '#3558c0', 700: '#637fd4', 800: '#97aae2', 900: '#cbd4f1' },
          'secondary': { DEFAULT: '#a6cfd5', 100: '#183033', 200: '#305f67', 300: '#488f9a', 400: '#72b2bc', 500: '#a6cfd5', 600: '#b7d8dd', 700: '#c9e2e6', 800: '#dbebee', 900: '#edf5f7' },
          'tertiary': { DEFAULT: '#c2e7d9', 100: '#183d2f', 200: '#2f7a5d', 300: '#47b78c', 400: '#84cfb2', 500: '#c2e7d9', 600: '#cdece0', 700: '#daf0e8', 800: '#e6f5ef', 900: '#f3faf7' }
        }

      
    },
  },
	plugins: [animations],
}


