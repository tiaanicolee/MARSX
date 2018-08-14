import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sendLoginRequest } from '../actions/index';
import './LoginPage.css'


/**
 * this component allows the user to login with
 * their GeoPass login
 */
class LoginPage extends Component{
    constructor(){
        super();
        this.state = {
            user: {
                username: '',
                password: ''
            }
        };
       this.login = this.login.bind(this)
    }

    /**
     * this method changes the local component state whenever
     * the user changes the value of their username or password
     * in the input boxes
     * @param  { string } changedField value (either username or password)
     * that is being changed
     * @param  { object } event event passed from onClick method
     */
    updateUser(changedField,event){
        /*logging the changes in the username and password
          only needed for development*/
        console.log(changedField + ': ' + event.target.value);

        // create new object so the local state is not mutated
        const newUserInfo = Object.assign({}, this.state.user);

        // assign new value to the duplicate state
        newUserInfo[changedField] = event.target.value;

        // set local state to newUserInfo
        this.setState({
            user: newUserInfo
        })
    }

    /**
     * this method dispatches a redux action in order to allow the
     * user to login
     * @param  {object} event event object passed from onClick method
     */
    login(event){
        event.preventDefault();

        /*logging the value that will be passed to the dispatch function
          only needed for development*/
        console.log('Login:'+ JSON.stringify(this.state.user));

        //dispatching the sendLoginRequest action
        this.props.sendLoginRequest(this.state.user.username, this.state.user.password)
    }

    render(){
        return(
            <div className="login">
                <div className="container">
                    <div className="row">
                        <div className="mid-div">
                            <h1>GeoPass Login</h1>
                            <form>
                                <input
                                  onChange={this.updateUser.bind(this, 'username')}
                                  className="form-control"
                                  type="text"
                                  placeholder="email" />
                                <br/>
                                <input
                                  onChange={this.updateUser.bind(this, 'password')}
                                  className="form-control"
                                  type="password"
                                  placeholder="password"/>
                                <br/>
                                <button onClick={this.login}>
                                    Start
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

//this function allows us to dispatch redux actions we chose within this component
function mapDispatchToProps(dispatch) {
    return bindActionCreators({sendLoginRequest: sendLoginRequest}, dispatch)
  }
export default connect(null,mapDispatchToProps)(LoginPage);
