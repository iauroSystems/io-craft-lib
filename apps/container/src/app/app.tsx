import {CssBaseline, Paper, Typography} from '@mui/material';
import {StyledEngineProvider} from '@mui/material/styles';
import {HashRouter} from 'react-router-dom';

import {
  AuthProvider,
  MicroFrontendProvider,
  ReduxProvider,
  RouteProvider,
  SettingProvider,
  ThemeProvider,
} from '../context';

export function App() {
  return (
    <ThemeProvider>
      <SettingProvider>
        <AuthProvider>
          <MicroFrontendProvider>
            <ReduxProvider>
              <RouteProvider>
                <HashRouter>
                  <StyledEngineProvider injectFirst>
                    <CssBaseline/>
                    <Paper>
                      <Typography variant="h5">
                        Container application Works
                      </Typography>
                    </Paper>
                    {/* <LayoutWrapper></LayoutWrapper> */}
                  </StyledEngineProvider>
                </HashRouter>
              </RouteProvider>
            </ReduxProvider>
          </MicroFrontendProvider>
        </AuthProvider>
      </SettingProvider>
    </ThemeProvider>
  );
}

export default App;
