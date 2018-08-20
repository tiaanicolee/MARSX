
// CSS Imports
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';

// npm Imports
import React from 'react';
import { render } from 'react-dom';

import App from './App'
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store';

const store  = configureStore()
window.store = store

render(
  <App store={ store }/>,
  document.getElementById('root')
)

registerServiceWorker();
