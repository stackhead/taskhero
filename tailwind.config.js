/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#06B6D4',
          light: '#22D3EE',
          dark: '#0891B2',
        },
        accent: {
          DEFAULT: '#7C3AED',
          alt: '#6366F1',
        },
        background: {
          dark: '#0B1220',
          light: '#F9FAFB',
        },
        surface: {
          dark: '#101828',
          light: '#FFFFFF',
        },
        text: {
          dark: '#FFFFFF',
          light: '#0F172A',
          mutedDark: '#64748B',
          mutedLight: '#64748B',
        },
      },
    },
  },
  plugins: [],
};
