/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'noise': 'url("noise-texture.jpg")', // Add a grainy noise texture image
      },
      backdropBlur: {
        '10': '10px',
      },
    },
  },
  plugins: [
    require('tailwindcss-filters'),
    
  ],
}

