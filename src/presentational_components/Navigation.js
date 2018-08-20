import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import LoginPage from '../container_components/LoginPage'
import UploadSamplesPage from '../container_components/UploadSamplesPage'
import DetailsPage from '../container_components/DetailsPage'

/*<Router>
  <Nav bsStyle="pills">
    <NavItem>
      <Link to={'/'} className="nav-link">
      Login
      </Link>
    </NavItem>
    <NavItem>
      <Link to={'/upload'} className="nav-link">
      Upload
      </Link>
    </NavItem>
    <NavItem>
      <Link to={'/details'} className="nav-link">
      Details
      </Link>
    </NavItem>
  </Nav>

</Router>*/

class Navigation extends Component{
 render() {
   return (
     <Router>
       <div>
         <h2>MARS X</h2>
         <nav className="navbar navbar-expand-lg navbar-light bg-light">
           <ul className="navbar-nav mr-auto">
             <li><Link to={'/'} className="nav-link">Login</Link></li>
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
   );
 }
}


export default Navigation;
