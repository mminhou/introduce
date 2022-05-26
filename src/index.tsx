import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from './theme/theme';
import { history } from './history';
import CustomRouter from './CustomRouter';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CustomRouter history={history}>
      <App />
    </CustomRouter>
  </ThemeProvider>,
  document.getElementById('root'),
);
