
// CSS Imports
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';

// npm Imports
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// Component Imports
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
