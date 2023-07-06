import {gessaDark, skyBlue} from './colors';
import {red} from '@mui/material/colors';

const lightText = {
  primary: 'rgb(17, 24, 39)',
  secondary: 'rgb(107, 114, 128)',
  disabled: 'rgb(149, 156, 169)',
};

const darkText = {
  primary: 'rgb(255,255,255)',
  secondary: 'rgb(229, 231, 235)',
  disabled: 'rgb(156, 163, 175)',
};

const themesConfig = {
  default: {
    palette: {
      mode: 'light',
      text: lightText,
      common: {
        black: 'rgb(17, 24, 39)',
        white: 'rgb(255, 255, 255)',
      },
      primary: gessaDark,
      // secondary: skyBlue,
      secondary: {
        light: skyBlue[100],
        main: skyBlue[500],
        dark: skyBlue[900],
      },
      background: {
        paper: '#FFFFFF',
        default: '#f6f7f9',
      },
      error: red,
    },
    status: {
      danger: 'orange',
    },
  },
  defaultDark: {
    palette: {
      mode: 'dark',
      text: darkText,
      primary: gessaDark,
      secondary: {
        light: skyBlue[100],
        main: skyBlue[500],
        dark: skyBlue[900],
      },
      background: {
        paper: '#1E2125',
        default: '#121212',
      },
      error: red,
    },
    status: {
      danger: 'orange',
    },
  },
  dark3: {
    palette: {
      mode: 'dark',
      text: darkText,
      primary: {
        light: '#C2C8D2',
        main: '#354968',
        dark: '#16213A',
      },
      secondary: {
        light: '#F4CFCA',
        main: '#D55847',
        dark: '#C03325',
        contrastText: '#FFFFFF',
      },
      background: {
        paper: '#23354E',
        default: '#1B2A3F',
      },
      error: red,
    },
    status: {
      danger: 'orange',
    },
  },
};

type themeNames = keyof typeof themesConfig;
type colorNames = keyof typeof red;

export const themesList: Array<themeNames> = [
  'default',
  'defaultDark',
  'dark3',
];

export default themesConfig;
