import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        spin: {
          '0%': {transform: 'rotate(100deg) translateX(0px) rotate(0deg)'},
          '100%': {transform: 'rotate(100deg) translateX(0px) rotate(-360deg)'}
        },
        showElementTransitionLeftToRight: {
          '0%': {
            transform: 'translateX(-90px)',
            opacity: '0'
          },
          '100%': {
            transform: 'translateX(0px)',
            opacity: '1'
          }
        },
        showElementTransitionRightToLeft: {
          '0%': {
            transform: 'translateX(90px)',
            opacity: '0'
          },
          '100%': {
            transform: 'translateX(0px)',
            opacity: '1'
          }
        },
        sendEmail: {
          '0%': {
            transform: 'rotate(0deg) translateX(0px)'
          },
          '100%': {
            transform: 'rotate(-20deg) translateX(55px)'
          }
        },
        circle: {
          '0%': {
            transform: 'translateY(0)'
          },
          '50%': {
            transform: 'translateY(20px)'
          },
          '100%': {
            transform: 'translateY(0)'
          }
        }
      },
      animation: {
        spin: 'spin 3s ease-in-out infinite',
        showElementTransitionLeftToRight: 'showElementTransitionLeftToRight 2s 1 forwards',
        showElementTransitionRightToLeft: 'showElementTransitionRightToLeft 2s 1 forwards',
        sendEmail: 'sendEmail 1.5s ease-in-out infinite',
        circle: 'circle 5s ease-in-out infinite'
      }
    },
  },
  plugins: [],
};
export default config;
