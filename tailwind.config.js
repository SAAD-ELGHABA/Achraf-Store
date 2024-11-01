/** @type {import('tailwindcss').Config} */
export const content = [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}',
];
export const theme = {
  extend: {
    expandWidth: "1s ease-in-out forwards",
  },
  keyframes: {
    '0%': { width: "0%" },
    '100%': { width: "100%" },
  },
};
export const plugins = [];
