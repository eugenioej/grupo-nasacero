/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1a2640',
          deep: '#0f172a',
          light: '#243352',
        },
        coral: {
          DEFAULT: '#c8433a',
          dark: '#a8342c',
          light: '#d65f57',
        },
        mustard: {
          DEFAULT: '#e8b33e',
          dark: '#c99a2e',
        },
        crema: '#f0ede8',
        ink: '#1e1e1e',
        muted: '#5a6478',
        steel: '#8a9bb0',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 24px rgba(26,38,64,0.10)',
        'card-hover': '0 12px 40px rgba(26,38,64,0.18)',
        hero: '0 32px 80px rgba(15,23,42,0.22)',
      },
    },
  },
  plugins: [],
};
