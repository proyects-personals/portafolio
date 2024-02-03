/** @type {import('tailwindcss').Config} */

const { createThemes } = require('tw-colors');

   module.exports = {
      content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
      plugins: [
         createThemes({
            light: { 
               "primary": "#ffffff",
               "secondary": "#0093ff",
               "accent": "#8c1c00",
               "neutral": "#ffffff",
               "base-100": "#0d3325",
               "info": "#0094cc",
               "success": "#00ff86",
               "warning": "#ff4100",
               "error": "#f10042",
               'brand': '#f1f1f1',
               'red': '#8d0013d7',
               'white': '#000000',
                'black': '#ffffff',
            },
           dark: { 
            "primary": "#000000",
            "secondary": "#0093ff",
            "accent": "#8c1c00",
            "neutral": "#15202B",
            "base-100": "#0d3325",
            "info": "#0094cc",
            "success": "#00ff86",
            "warning": "#ff4100",
            "error": "#f10042",
            'brand': '#000000',
            'white': '#ffffff',
            'red': '#8d0013d7',
               'black': '#000000',
           },
           forest: { 
              'primary': '#2A9D8F',
              'secondary': '#E9C46A',
              'brand': '#264653',
           },
         })
      ],
   };