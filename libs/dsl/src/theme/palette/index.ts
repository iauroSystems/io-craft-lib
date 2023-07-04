import {
  IThemePaletteATBackground,
  IThemePaletteATNeutral,
  IThemePaletteATPrimary,
  IThemePaletteATSecondary,
  IThemePaletteATSystemColor,
  IThemePaletteATText,
} from './appliedThemeInterface';

interface IThemePaletteText {
  primary: string;
  secondary?: string;
  disabled?: string;
  c100?: string;
  c50?: string;
}

interface IThemePaletteSystem {
  dark?: string;
  main?: string;
  light?: string;
  c100?: string;
  c50?: string;
}

interface IThemePaletteBackground {
  default: string;
  // paper: string;
}

export interface IThemePalette {
  mode: 'dark' | 'light';
  primary?: IThemePaletteSystem;
  secondary?: IThemePaletteSystem;
  text?: IThemePaletteText;
  system?: IThemePaletteSystem;
  background?: IThemePaletteBackground;
  systemColor1?: IThemePaletteSystem;
  systemColor2?: IThemePaletteSystem;
  systemColor3?: IThemePaletteSystem;
  systemColor4?: IThemePaletteSystem;
  systemColor5?: IThemePaletteSystem;
  systemColor6?: IThemePaletteSystem;
  dark?: IThemePaletteSystem;
  light?: IThemePaletteSystem;
  chart?: any;
  custom?: any;
}

export interface IThemePaletteAT {
  mode: 'dark' | 'light';
  primary?: IThemePaletteATPrimary;
  secondary?: IThemePaletteATSecondary;
  text?: IThemePaletteATText;
  system?: IThemePaletteSystem;
  background?: IThemePaletteATBackground;
  neutral?: IThemePaletteATNeutral;
  systemColor1?: IThemePaletteATSystemColor;
  systemColor2?: IThemePaletteATSystemColor;
  systemColor3?: IThemePaletteATSystemColor;
  systemColor4?: IThemePaletteATSystemColor;
  systemColor5?: IThemePaletteATSystemColor;
  systemColor6?: IThemePaletteATSystemColor;
  dark?: IThemePaletteSystem;
  light?: IThemePaletteSystem;
  chart?: any;
  custom?: any;
}

export { default as dark } from './dark';
export { default as light } from './light';
export { default as solarized } from './solarized';
export { default as appliedTheme } from './appliedTheme';
