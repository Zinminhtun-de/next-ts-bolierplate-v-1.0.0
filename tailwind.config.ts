import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2489FF',
        secondary: '#FFECEB',
        text: '#686868',
        label: '#1E1E1E',
        green: {
          50: '#ECF5E8',
          100: '#C4E1B7',
          200: '#A8D294',
          300: '#80BD64',
          400: '#68B145',
          500: '#429D17',
          600: '#3C8F15',
          700: '#2F6F10',
          800: '#24560D',
          900: '#1C420A',
        },
        grey: {
          50: '#F5F5FB',
          100: '#D2D2D2',
          200: '#C0C0C0',
          350: '#E4E4E4',
          300: '#686868',
          400: '#4B4B4B',
          500: '#575757',
        },
        info: {
          50: '#4fc3f7',
          100: '#29b6f6',
          200: '#0288d1',
        },
        yellow: {
          200: '#FFF964',
          400: '#FFEB3B',
        },
        orange: {
          50: '#ffb74d',
          100: '#ffa726',
          200: '#f57c00',
        },
        red: {
          50: '#FCE6E6',
          100: '#F6B2B2',
          150: '#FFA8A1',
          200: '#F18C8C',
          300: '#EB5858',
          400: '#E73737',
          500: '#E10505',
          550: '#D92214',
          600: '#CD0505',
          700: '#9F140A',
          800: '#7C0303',
          900: '#5F0202',
        },
        slate: {
          800: '#101828',
          900: '#1E1E1E',
        },
        lime_pink: '#B5838D',
        rain_storm: '#264653',
        valley_view: '#ADC178',

        princely_violet: '#6D597A',
        blue_bolt: '#00BBF9',

        life_is_good: '#E09F3E',
        junkyard_pink: '#FB6F92',
        unimaginable: '#8E7DBE',
        violet_hickey: '#390099',
        bloodthirsty_ltps: '#C1121F',
        red_blood: '#670000',
      },

      fontWeight: {
        bold: '800',
        semibold: '700',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    screens: {
      xs: '360px',
      sm: '375px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1400px',
      maxXs: { max: '360px' },
      maxMd: { max: '767px' },
      maxSm: { max: '374px' },
    },
  },
  plugins: [],
};
export default config;
