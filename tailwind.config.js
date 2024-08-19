import daisyui from 'daisyui';
import tsh from 'tailwind-scrollbar-hide';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.jsx'],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      poetsenone: ['Poetsen One', 'system ui'],
    },
    extend: {},
  },
  plugins: [daisyui, tsh],
  daisyui: {
    themes : ['forest']
  },
};

