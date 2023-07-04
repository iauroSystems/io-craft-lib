import { ThemeOptions } from '@mui/material';
import { roboto } from './typography';

const soulifyTheme: ThemeOptions = {
  palette: {
    primary: {
      main: '#0458AE',
      light: '#619fde',
      dark: '#023D79',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#00C5CF',
      dark: '#008990',
      light: '#33D0D8',
    },
    background: {
      default: '#F5F2F2',
      paper: '#FFFFFF',
    },
    divider: '#EBE4E4',
  },
  typography: roboto,
};

export default soulifyTheme;
