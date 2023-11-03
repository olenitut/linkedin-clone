import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      red: {
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
      gray: {
        '500': '#7e7476',
      },
      blue: {
        '500': '#378fe9',
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
