import {gessaDark, skyBlue} from '../theme/colors';
import {red} from '@mui/material/colors';
import {createSlice} from '@reduxjs/toolkit';

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

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    palette: {
      mode: 'light',
      text: lightText,
      common: {
        black: 'rgb(17, 24, 39)',
        white: 'rgb(255, 255, 255)',
      },
      primary: gessaDark,
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
  reducers: {
    setDefaultTheme: (state, action) => {
      state.palette = action.payload.palette;
    },
  },
});

// const counterReducer = (state = 0, action) => {
//     switch(action.type) {
//         case "INCREMENT":
//             return state+action.payload;

//         case "DECREMENT":
//             return state-action.payload;

//         default:
//             return state;
//     }
// }

export const {setDefaultTheme} = themeSlice.actions;

export default themeSlice.reducer;
