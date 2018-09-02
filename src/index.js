//Npm Packages
import React from 'react';
import ReactDOM from 'react-dom';
import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//Components
import requireAuth from './components/hoc/require_auth';
import noRequireAuth from './components/hoc/no_require_auth';
import SignIn from './components/SignIn';
import Upload from './components/Upload';
import HomePage from './components/HomePage';
import SignOut from './components/SignOut';
import Navbar from './components/NavBar';

//Actions and Reducers
import { AUTHENTICATED } from './actions';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers)

const usercode = localStorage.getItem('usercode');
console.log('Cookies usercode:', usercode)

if(usercode) {
  store.dispatch({ type: AUTHENTICATED });
}



ReactDOM.render(
  <Provider store={store}>
   <Router>
     <div>
       <Navbar />
       <Route exact path="/" component={HomePage} />
       <Route path="/signin" component={noRequireAuth(SignIn)} />
       <Route path="/signout" component={requireAuth(SignOut)} />
       <Route path="/upload" component={requireAuth(Upload)} />
     </div>
   </Router>
 </Provider>,
  document.getElementById('root')
)
