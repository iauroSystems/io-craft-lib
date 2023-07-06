import {IThemePalette} from '.';
import {rhino} from '../colors';
import white from '../colors/white';

const solarized: IThemePalette = {
  mode: 'dark',
  text: {
    primary: 'rgb(255,255,255)',
    secondary: 'rgb(229, 231, 235)',
    disabled: 'rgb(156, 163, 175)',
  },
  primary: white,
  secondary: rhino,
  background: {
    paper: '#23354E',
    default: '#1B2A3F',
  },
  custom: {
    selectedText: '#303030',
    form1: '#155189',
    form2: '#23354E',
    form3: '#23354E',
    formError: 'red',
    inputNode: '#ffbf00',
    transformNode: '#BA55D3',
    storeNode: '#BA55D3',
    outputNode: '#33b64d',
  },
};

export default solarized;
