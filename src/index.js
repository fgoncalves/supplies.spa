import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import Login from './containers/Login';

const store = configureStore();

render(
  <Provider store={store}>
    <Login />
  </Provider>
  , document.querySelector('#app')
);
