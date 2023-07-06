interface IThemeFontType {
  fontFamily: string;
  fontSize: string;
  lineHeight: string;
  letterSpacing: string;
  minWidth?: string,
  height?: string,
  textTransform?: string
}

export interface IThemeFont {
  [id: string]: IThemeFontType;
}

export {default as roboto} from './roboto';
