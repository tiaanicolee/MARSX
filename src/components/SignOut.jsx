import React, { Component } from 'react';
import { connect } from 'react-redux';
import {signOutAction} from '../actions'
import './css/SignOut.css'

class SignOut extends Component {

  signOut(){
    this.props.signOutAction()
  }

  render(){
    return(
      <div className="signout">
        <button
          className="btn btn-danger"
          onClick={() => this.signOut()}>
          Sign Out
        </button>
      </div>

    )
  }
}
export default connect(null, {signOutAction})(SignOut)
