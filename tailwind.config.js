/** @type {import('tailwindcss').Config} */
const { createThemes } = require('tw-colors');

module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
  },
  plugins: [
    createThemes({
      light: {
        'bg-primary':'#ff500b',
        'primary': '#ff500b',
        'secondary-bg': '#fff',
        'theme': '#fff',
        'header-color': '#c23fe2',
        'route-link-active': '#fff',
        'link-color': '#555050',
        'border-color': '#555050',
      }, 
      dark: {
        'bg-primary':'#2577c1',
        'primary': '#2577c1',
        'secondary-bg': '#424242',
        'theme': '#424242',
        'header-color': '#424242',
        'route-link-active': '#ff500b',
        'link-color': '#fff',
        'border-color': '#1cd61c',
      }, 
    })
  ],
};
