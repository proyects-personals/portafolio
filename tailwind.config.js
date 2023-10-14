/** @type {import('tailwindcss').Config} */

const { createThemes } = require('tw-colors');

   module.exports = {
      content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
      plugins: [
         createThemes({
            light: { 
               'primary': '#D2D2D2',
               'secondary': 'darkblue',
               'brand': '#F3F3F3',
            },
           dark: { 
              'primary': '#6C6768',
              'secondary': 'tomato',
              'brand': '#4A4A4A',
           },
           forest: { 
              'primary': '#2A9D8F',
              'secondary': '#E9C46A',
              'brand': '#264653',
           },
         })
      ],
   };