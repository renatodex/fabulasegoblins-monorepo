module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "@/src/components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "../../packages/ui/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
      'dolly-bold': ['Dolly Bold', 'Helvetica Bold', 'Arial'],
      'adobe-kis': ['adobe-kis', 'sans-serif']
    },
    extend: {
      colors: {
        'gunmetal': '#243338',
        'raisin-black': '#252525',
        'aero-blue': '#CAFFD2',
        'eton-blue': '#99C39C',
        'dark-charcoal': '#2E2E2E',
        'columbia-blue': '#CBD5E0',
        'deep-space-sparkle': '#4B5F66',
        'bright-lilac': '#D589F0',
        'yellow-sun': '#F9E21B',
        'blue-magenta-violet': '#5C3292',
        'celadon-green': '#388476',
        'lavender-blue': '#D0D5FE'
      }
    },
  },
  plugins: [],
  safelist: [
    'saturate-50',
    'saturate-200',
  ]
}
