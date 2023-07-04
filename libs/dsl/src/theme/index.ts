import { Theme } from '@mui/material';
import soulifyTheme from './soulify';
import darkTheme from './dark';
import lightTheme from './light';
import { appliedTheme, IThemePalette } from './palette';
import solarizedTheme from './solarized';
import { IThemeFont } from './typography';
import appliedTh from './appliedTheme';

export type ThemeContextType = {
  theme: Theme;
  changeTheme: (theme: ITheme) => void;
};

export interface ITheme {
  palette: IThemePalette;
  typography: IThemeFont;
}

export { default as light } from './light';
export { default as dark } from './dark';
export { default as solarized } from './solarized';
export { default as appliedTh } from './appliedTheme';

const themes = {
  light: lightTheme,
  dark: darkTheme,
  solarized: solarizedTheme,
  soulify: soulifyTheme,
  default: appliedTh,
  // default: darkTheme,
};

export default themes;
