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
        'primary': '#061d49', //use bg-primary or text-primary to use these colors in components
        'secondary': '#22a796', //use bg-secondary or text-secondary to use these colors in components
        'neutral-dark': '#1C1C1C',
        'neutral-light': '#F7F8FA',
      }
    },
  },
  plugins: [],
} satisfies Config

