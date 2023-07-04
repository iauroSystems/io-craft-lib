import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import '../src/static/assets/icons/icomoon/style.css';

import themes from '../src/theme';
import "./tailwind.css";

import { createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
const { addDecorator, addParameters } = require('@storybook/react');
const { jsxDecorator } = require('storybook-addon-jsx');

addDecorator(jsxDecorator);
addParameters({
  categoryOrder: ['Nucleus', 'Atoms','Molecules','Organisms'],
});
export const decorators = [
  (Story) => {
    const currentTheme = createTheme(themes.light);
    return (
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={currentTheme}>
          <CssBaseline />
          <Story />
        </ThemeProvider>
      </StyledEngineProvider>
    );
  },
];

export const parameters = {
  options: {
    storySort: {
      order: ['Nucleus', 'Atoms', 'Molecules', 'Organisms'],
    },
  },
};


