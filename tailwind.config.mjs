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
    },
  },
	plugins: [animations],
}
