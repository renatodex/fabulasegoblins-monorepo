module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "@/src/components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "../../packages/ui/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    screens: {
      'xs': '400px',
      // => @media (min-width: 400px) { ... }
      'sm': '640px',
      // => @media (min-width: 640px) { ... }
      'md': '768px',
      // => @media (min-width: 768px) { ... }
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
      '2xl': '1536px'
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        'gunmetal': '#243338',
        'raisin-black': '#252525',
        'aero-blue': '#CAFFD2',
        'dark-charcoal': '#2E2E2E'
      }
    },
  },
  plugins: [],
}
