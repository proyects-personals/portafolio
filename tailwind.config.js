/** @type {import('tailwindcss').Config} */

const { createThemes } = require('tw-colors');

   module.exports = {
      content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
      plugins: [
         createThemes({
            light: { 
               'dark':'#D2D2D2',
               'white':'#0a0a0a',
               'primary': '#F0F0F0',
               'secondary': 'darkblue',
               'brand': '#F3F3F3',
               'red': '#560000',
            },
           dark: { 
              'dark':'#000000',
              'white':'#ffffff',
              'primary': '#050b14',
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