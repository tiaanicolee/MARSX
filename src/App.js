import React from 'react';
import { Router, Switch, Route, Link } from 'react-router-dom'
import history from './history'
import LoginPage from './container_components/LoginPage'
import UploadSamplesPage from './container_components/UploadSamplesPage'
import DetailsPage from './container_components/DetailsPage'
import { Provider } from 'react-redux';


const App = ({ store }) => (
  <Provider store={ store }>
    <Router history={history}>
      <div>
        <h2>MARS X</h2>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link" onClick={this.handleOnClick}>Logout</Link></li>
            <li><Link to={'/upload'} className="nav-link">Upload</Link></li>
            <li><Link to={'/details'} className="nav-link">Details</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route exact path='/' component={LoginPage}/>
          <Route path='/upload' component={UploadSamplesPage}/>
          <Route path='/details' component={DetailsPage}/>
        </Switch>
      </div>
    </Router>
  </Provider>
)


export default App;
