/** @type {import('tailwindcss').Config} */

export default {
	content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'
  ],
	theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },
      colors:{
        'header': '#1f7a8c',
        'title': '#2196F3',
        'footer': '#02232f',
        'text': '#2a2a2a',
        'subtext': '#767676',
        'sideNav': '#f3f3f3',
      }

    }
  },
}


