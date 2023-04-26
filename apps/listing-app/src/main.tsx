import * as ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from './app/app'
import { alTeamTheme } from './app/utils/theme'
import { ThemeProvider } from 'styled-components'
import { StyledEngineProvider } from '@mui/material'
import store from './app/utils/redux/store'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import { Auth0Provider } from "@auth0/auth0-react";
import history from "./app/utils/history";
import { getConfig } from './config'

const onRedirectCallback = (appState: any) => {
  history.push(
    appState && appState.returnTo ? appState.returnTo : window.location.pathname
  );
};

const config = getConfig();
const providerConfig = {
  domain: config.domain,
  clientId: config.clientId,
  onRedirectCallback,
  authorizationParams: {
    redirect_uri: window.location.origin + '/talents',
    ...(config.audience ? { audience: config.audience } : null),
  },
};


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <LocalizationProvider dateAdapter={AdapterMoment}>
    <ThemeProvider theme={alTeamTheme}>
      <StyledEngineProvider injectFirst>
        <Provider store={store}>
          <Router>
            <Auth0Provider {...providerConfig}>
              <App />
            </Auth0Provider>
          </Router>
        </Provider>
      </StyledEngineProvider>
    </ThemeProvider>
  </LocalizationProvider>,
)