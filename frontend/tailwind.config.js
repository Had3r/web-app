/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-gray': '#eff0f3',
        'bright-green': '#28dc84',
        'vivid-purple': '#9b89ff',
        'soft-orange': '#ffecdd',
        'pale-purple': '#ebe7ff',
        'deep-gray': '#282a28',
        'warm-orange': '#f7a258',
        'lighter-gray': '#d3d4d8',
      },
    },
  },
  plugins: [],
}

