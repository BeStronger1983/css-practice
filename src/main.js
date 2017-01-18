import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import Vampire from './containers/Vampire';

import configureStore from './store/configureStore';

ReactDOM.render(
  <Provider store={configureStore}>
      <Vampire />
  </Provider>
  , document.getElementById('app'));
