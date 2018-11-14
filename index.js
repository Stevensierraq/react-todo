import React from 'react';
import ReactDOM from 'react-dom';
import store from './src/store';
import { Provider } from 'react-redux';

import App from './src/app';

const root = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  root
);
