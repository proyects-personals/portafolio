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
               'brand': '#dad7d7',
               'red': '#8d0013d7',
               'white': '#000000',
               'black': '#ffffff',
               'gray-50': '#F9FAFB',
                "metal":"#64748b",
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
            'brand': '#F3F4F6',
            'white': '#ffffff',
            'red': '#8d0013d7',
            'black': '#000000',
            'gray-50': '#4B5563',
            "metal":"#64748b",

           },
           forest: { 
              'primary': '#2A9D8F',
              'secondary': '#E9C46A',
              'brand': '#264653',
           },
         })
      ],
   };