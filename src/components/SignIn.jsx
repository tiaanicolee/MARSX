import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { signInAction } from '../actions';
import { connect } from 'react-redux'

class SignIn extends Component {
  submit = (values) => {
    console.log(values)
    this.props.signInAction(values, this.props.history);
  }

  errorMessage() {
  if (this.props.errorMessage) {
    return (
      <div className="info-red">
        {this.props.errorMessage}
      </div>
      );
    }
  }

  render() {
    const { handleSubmit } = this.props
    return (
      <div className="form">
        <div className="container">
          <h2>GeoPass Login</h2>
          <form onSubmit={ handleSubmit(this.submit)}>
            <Field name="username"
                   component="input"
                   type="text"
                   placeholder="username"
            />
            <Field name="password"
                   component="input"
                   type="password"
                   placeholder="password"
            />
              <button
                type="submit"
                className="btn btn-primary"
              >
                Login
              </button>
          </form>
            {this.errorMessage()}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

const reduxFormSignIn = reduxForm({
  form: 'signin'
})(SignIn);

export default connect(mapStateToProps, {signInAction})(reduxFormSignIn);
