import React, { Component } from 'react';
import { connect } from 'react-redux';
import marsLogo from '../images/MarsLogoSansBg.png'

import {Navbar, Nav, NavItem} from 'react-bootstrap';
import './css/NavBar.css';

class Header extends Component {
  navbarLinks() {
    console.log('NavBar props:',this.props)

    //Return different links depending on the authentication status
    return this.props.authenticated ?
        <div>
          <Nav>
            <NavItem eventKey={1} href="details">Details</NavItem>
            <NavItem eventKey={2} href="upload">Upload</NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={3} href="signout">Sign Out</NavItem>
          </Nav>
        </div>
    :
      <Nav pullRight>
        <NavItem eventKey={4} href="signin">Sign In</NavItem>
      </Nav>
  }

  render() {
    return (
      <Navbar inverse className="nav">
        <Navbar.Header>
          <Navbar.Brand >
            <img src={marsLogo} />
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem href="/">MARS</NavItem>
        </Nav>     
        {this.navbarLinks()}
      </Navbar>
    );
  }
}
  /*navbarLinks() {
    console.log('NavBar props:',this.props)

    //Return different links depending on the authentication status
    if (this.props.authenticated) {
      return [


            <Link to="/details" className="links">Details</Link>

        ,

            <Link to="/upload"  className="links">Upload</Link>

        ,

            <Link to="/signout" className="links">Sign out</Link>



      ];
    }
    return [
      <li key="signin"><Link to="/signin" className="links">Sign in</Link></li>,
    ];
  }

  render() {
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container">

              <Link to="/" className="brand">MarsX</Link>



          {this.navbarLinks()}
        </div>
      </nav>
    );
  }
}*/

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  };
}

export default connect(mapStateToProps)(Header);
