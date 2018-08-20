import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Redirect } from 'react-router-dom'
class UploadSamplesPage extends Component {


  render() {
    console.log(this.props)
    return this.props.isSuccessfulLogin ? (
      <div>
        <h2>Upload Samples Page</h2>
      </div>
    ) : ( <Redirect  push to='/details'/> )
  }
}

const mapStateToProps = (state) => {

  return {isSuccessfulLogin: state.Login[0].isSuccessfulLogin,
          usercode: state.Login[0].usercode}
}
export default connect(mapStateToProps)(UploadSamplesPage);