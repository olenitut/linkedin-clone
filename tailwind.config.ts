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
      rose: {
        '50': '#fef2f4',
        '100': '#fde6e9',
        '200': '#fbd0d9',
        '300': '#f7aab9',
        '400': '#f27a93',
        '500': '#e63f66',
        '600': '#d42a5b',
        '700': '#b21e4b',
        '800': '#951c45',
        '900': '#801b40',
        '950': '#470a1f',
      },
      gray: {
        '50': '#f3f3f3',
        '100': '#e2dfdf',
        '200': '#c6c2c2',
        '300': '#a69e9e',
        '400': '#8c8384',
        '500': '#7e7476',
        '600': '#675f61',
        '700': '#575153',
        '800': '#4c4749',
        '900': '#434042',
        '950': '#252324',
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
