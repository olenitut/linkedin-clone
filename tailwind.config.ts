import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        modal:
          'rgb(0 0 0 / 0%) 0 0 0 0, rgb(0 0 0 / 0%) 0 0 0 0, rgb(0 0 0 / 10%) 0 10px 15px -3px, rgb(0 0 0 / 10%) 0 4px 6px -4px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'signup-pattern': "url('/assets/images/signup-bg.webp')",
        'signin-pattern': "url('/assets/images/signin-bg.webp')",
        'after-login': "url('/assets/images/after-login.gif')",
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        slideIn: {
          '0%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 400ms ease-in',
        fadeOut: 'fadeOut 400ms ease-out',
        slideIn: 'slideIn 1440ms cubic-bezier(0.14, 0.78, 0.36, 1)',
      },
    },
    fontFamily: {
      sans: ['var(--font-space-grotesk)'],
    },
    colors: {
      red: {
        '10': '#fff5f5',
        '50': '#fff1f1',
        '100': '#ffdfdf',
        '200': '#ffc5c5',
        '300': '#ff9c9c',
        '400': '#ff6363',
        '500': '#ff3333',
        '600': '#ee1414',
        '700': '#c60c0c',
        '800': '#a60e0e',
        '900': '#891313',
        '950': '#4b0404',
      },
      white: {
        full: '#fff',
        opacity: 'rgba(255 255 255 / 80%)',
      },
      black: {
        backdrop: 'rgba(0 0 0 / 40%)',
      },
      gray: {
        '150': '#e4e4e7',
        '200': '#e5e7eb',
        '300': '#8893c7',
        '500': '#78716c',
        '600': '#7e7476',
      },
      blue: {
        '500': '#4794e3',
      },
      purple: {
        '500': '#a871ea',
      },
      orange: {
        '500': '#e06847',
      },
    },
  },
  plugins: [],
};
export default config;
