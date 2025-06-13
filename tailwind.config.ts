import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#c62f9d', //use bg-primary or text-primary to use these colors in components
        'secondary': '#22a796', //use bg-secondary or text-secondary to use these colors in components
        'neutral-dark': '#1C1C1C',
        'neutral-light': '#F7F8FA',
      }
    },
  },
  plugins: [],
} satisfies Config

//(Devon - putting these color notes here until Yannick(manger for this file) adds the following colors to the Tailwind theme.)
//#05183E - blue
//#C62F9D - pink
//#22A696 - green
//#849ac0 - grey/blue (gradient)