import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#c03994', //use bg-primary or text-primary to use these colors in components
        secondary: '#20a593', //use bg-secondary or text-secondary to use these colors in components
        'pa-background': '#05183E',
        'neutral-dark': '#1C1C1C',
        'neutral-light': '#F7F8FA',
        'await-gradient': 'linear-gradient(to left, #f5515f, #9f041b)',
      },
      // These are the fonts that are used in the project.
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'].join(', '),
        montserrat: ['Montserrat', 'sans-serif'].join(', '),
        inter: ['Inter', 'sans-serif'].join(', '),
      },
      keyframes: {
        'scroll-left': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-33.3333%)' },
        },
      },
      animation: {
        'scroll-left': 'scroll-left 40s linear infinite',
      },
    },
  },
  plugins: [
    function ({ addUtilities }: { addUtilities: (utilities: Record<string, any>) => void }) {
      addUtilities({
        '.paused': {
          'animation-play-state': 'paused',
        },
        '.running': {
          'animation-play-state': 'running',
        },
      });
    },
  ],
} satisfies Config;

//(Devon - putting these color notes here until Yannick(manger for this file) adds the following colors to the Tailwind theme.)
//#05183E - blue
//#C62F9D - pink
//#22A696 - green
//#849ac0 - grey/blue (gradient)
