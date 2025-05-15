import gluestackPlugin from '@gluestack-ui/nativewind-utils/tailwind-plugin';
const { platformSelect } = require('nativewind/theme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',
  content: [
    'src/**/*.{tsx,jsx,ts,js}',
    'app/**/*.{tsx,jsx,ts,js}',
    'components/**/*.{tsx,jsx,ts,js}',
  ],
  presets: [require('nativewind/preset')],
  safelist: [
    {
      pattern:
        /(bg|border|text|stroke|fill)-(primary|secondary|tertiary|error|success|warning|info|typography|outline|background|indicator)-(0|50|100|200|300|400|500|600|700|800|900|950|white|gray|black|error|warning|muted|success|info|light|dark|primary)/,
    },
  ],
  theme: {
    extend: {
      colors: {
        error: {
          100: '#F2DFD8',
          300: '##E8BAAB',
          700: '#C44117',
        },
        white: '#FFF',
        gray: {
          100: '#FAFAFA',
          200: '#F3F2F2',
          300: '#EDEDED',
          400: '#E6E5E5',
          500: '#D7D5D5',
          600: '#8D8686',
          700: '#574F4D',
          800: '#403937',
          900: '#272221',
        },
        yellow: {
          500: '#DBAC2C',
          700: '#C47F17',
        },
        purple: {
          100: '#EBE5F9',
          300: '#8047F8',
          700: '#4B2995',
        },

        typography: {
          0: 'rgb(var(--color-typography-0)/<alpha-value>)',
          50: 'rgb(var(--color-typography-50)/<alpha-value>)',
          100: 'rgb(var(--color-typography-100)/<alpha-value>)',
          200: 'rgb(var(--color-typography-200)/<alpha-value>)',
          300: 'rgb(var(--color-typography-300)/<alpha-value>)',
          400: 'rgb(var(--color-typography-400)/<alpha-value>)',
          500: 'rgb(var(--color-typography-500)/<alpha-value>)',
          600: 'rgb(var(--color-typography-600)/<alpha-value>)',
          700: 'rgb(var(--color-typography-700)/<alpha-value>)',
          800: 'rgb(var(--color-typography-800)/<alpha-value>)',
          900: 'rgb(var(--color-typography-900)/<alpha-value>)',
          950: 'rgb(var(--color-typography-950)/<alpha-value>)',
          white: '#FFFFFF',
          gray: '#D4D4D4',
          black: '#181718',
        },
        outline: {
          0: 'rgb(var(--color-outline-0)/<alpha-value>)',
          50: 'rgb(var(--color-outline-50)/<alpha-value>)',
          100: 'rgb(var(--color-outline-100)/<alpha-value>)',
          200: 'rgb(var(--color-outline-200)/<alpha-value>)',
          300: 'rgb(var(--color-outline-300)/<alpha-value>)',
          400: 'rgb(var(--color-outline-400)/<alpha-value>)',
          500: 'rgb(var(--color-outline-500)/<alpha-value>)',
          600: 'rgb(var(--color-outline-600)/<alpha-value>)',
          700: 'rgb(var(--color-outline-700)/<alpha-value>)',
          800: 'rgb(var(--color-outline-800)/<alpha-value>)',
          900: 'rgb(var(--color-outline-900)/<alpha-value>)',
          950: 'rgb(var(--color-outline-950)/<alpha-value>)',
        },
      },
      fontFamily: {
        body: ['Roboto', 'sans-serif'],
        'body-bold': ['RobotoBold', 'sans-serif'],
        title: ['Baloo', 'sans-serif'],
      },
      fontWeight: {
        bold: '700',
      },
      fontSize: {
        'title-xl': [
          '36px',
          {
            lineHeight: '130%',
            fontWeight: '700',
          },
        ],
        'title-lg': [
          '24px',
          {
            lineHeight: '130%',
            fontWeight: '700',
          },
        ],
        'title-md': [
          '20px',
          {
            lineHeight: '130%',
            fontWeight: '700',
          },
        ],
        'title-sm': [
          '16px',
          {
            lineHeight: '130%',
            fontWeight: '700',
          },
        ],
        'title-xs': [
          '14px',
          {
            lineHeight: '130%',
            fontWeight: '700',
          },
        ],
      },
      boxShadow: {
        'hard-1': '-2px 2px 8px 0px rgba(38, 38, 38, 0.20)',
        'hard-2': '0px 3px 10px 0px rgba(38, 38, 38, 0.20)',
        'hard-3': '2px 2px 8px 0px rgba(38, 38, 38, 0.20)',
        'hard-4': '0px -3px 10px 0px rgba(38, 38, 38, 0.20)',
        'hard-5': '0px 2px 10px 0px rgba(38, 38, 38, 0.10)',
        'soft-1': '0px 0px 10px rgba(38, 38, 38, 0.1)',
        'soft-2': '0px 0px 20px rgba(38, 38, 38, 0.2)',
        'soft-3': '0px 0px 30px rgba(38, 38, 38, 0.1)',
        'soft-4': '0px 0px 40px rgba(38, 38, 38, 0.1)',
      },
    },
  },
  plugins: [gluestackPlugin],
};
