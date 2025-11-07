/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'slate': {
          'deep': '#1B1F24',
        },
        'ridge': {
          'blue': '#275C7A',
        },
        'fog': '#E9ECEF',
        'well': {
          'green': '#4B7F6A',
        },
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'serif': ['Source Serif Pro', 'serif'],
        'mono': ['IBM Plex Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}

