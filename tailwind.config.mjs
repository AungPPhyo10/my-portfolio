import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',  
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ['var(--font-lato)']
      }
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ['light', 'dark', 'halloween', 'aqua']
  }
  // daisyui: {
  //   themes: ['light', 'dark', 'halloween'],
  // },
};