'use client';
import quickSand from '@/app/font';
import { Colors } from '@/types/colors';
// import walone from "@/app/font";
import { createTheme } from '@mui/material/styles';
import { createBreakpoints } from '@mui/system';
const breakpoints = createBreakpoints({});

declare module '@mui/material/styles' {
  interface Theme {
    colors?: Colors;
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    colors?: Colors;
  }
}

const theme = createTheme({
  colors: {
    primary: '#2489FF',
    white: '#ffffff',
    black: '#000000',
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
  },
  palette: {
    mode: 'light',
    text: {
      primary: '#000000',
    },
  },
  typography: {
    fontFamily: quickSand.style.fontFamily,
    fontWeightMedium: 600,
  },
  components: {
    MuiGrid: {
      styleOverrides: {
        root: {
          margin: '0',
        },
        item: {
          paddingLeft: '0 !important',
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paperWidthXs: {
          maxWidth: '330px',
          width: '100%',
          borderRadius: '10px',
        },
      },
    },
    MuiBackdrop: {
      styleOverrides: {
        root: {
          maxWidth: '430px',
          margin: '0 auto',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        contained: {
          height: '42px',
        },
        outlined: {
          height: '42px',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& input': {
            padding: '10px',
            fontWeight: 500,
          },
        },
      },
    },
  },
});

export default theme;
