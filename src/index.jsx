import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './page/App';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/global-styles';
import { ContextProvider } from './page/provider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ContextProvider>
        <App />
      </ContextProvider>
      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>
);
