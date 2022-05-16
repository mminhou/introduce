import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from './theme/theme';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <HashRouter basename=''>
      <App />
    </HashRouter>
  </ThemeProvider>,
  document.getElementById('root'),
);
