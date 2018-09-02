import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  navbarLinks() {
    console.log('NavBar props:',this.props)

    //Return different links depending on the authentication status
    if (this.props.authenticated) {
      return [
        <li key="upload"><Link to="/upload">Upload</Link></li>,
        <li key="signout"><Link to="/signout">Sign out</Link></li>
      ];
    }
    return [
      <li key="signin"><Link to="/signin">Sign in</Link></li>,
    ];
  }

  render() {
    return (
      <nav className="navbar">
        <div className="container">
          <Link to="/"><span className="brand">MarsX</span></Link>
          <ul>
            {this.navbarLinks()}
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  };
}

export default connect(mapStateToProps)(Navbar);
