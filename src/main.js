import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import Vampire from './containers/Vampire/index';

import configureStore from './store/configureStore';

render(
  <Provider store={configureStore}>
    <Vampire />
  </Provider>
  , document.getElementById('app')
);
