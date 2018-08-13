import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
//import App from './App';
import LoginPage from './container_components/LoginPage'

import registerServiceWorker from './registerServiceWorker';
import configureStore from './store';


ReactDOM.render(
    <Provider store={configureStore()}>
        <LoginPage/>
    </Provider>,
     document.getElementById('root')
);
registerServiceWorker();
