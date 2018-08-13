import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sendLoginRequest } from '../actions/index';
import './LogingPage.css'
//import axios from '../../node_modules/axios';

class LoginPage extends Component{
    constructor(){
        super()
        this.state = {
            user: {
                username: '',
                password: ''
            }
        }
       this.login = this.login.bind(this)
    }
   
    updateUser(changedFeild,event){
        console.log(changedFeild + ': ' + event.target.value)
        const newUserInfo = Object.assign({}, this.state.user)
        newUserInfo[changedFeild] = event.target.value
        this.setState({
            user: newUserInfo
        })  
        
        
    }

    login(event){
        event.preventDefault();
        console.log('Login:'+ JSON.stringify(this.state.user))
        //this.props.sendLoginRequest(this.state.user.username, this.state.user.password)
        /*axios({
            method: 'post',
            url: 'https://app.geosamples.org/webservices/credentials_service_v2.php',
            data: {
              username: this.state.user.username,
              lastName: this.state.user.password
            }
        })
        .then(function(response){
            console.log(response)
        })*/
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
                                <input onChange={this.updateUser.bind(this, 'username')} className="form-control" type="text" placeholder="email" />
                                <br/>
                                <input onChange={this.updateUser.bind(this, 'password')} className="form-control" type="password" placeholder="password"/>
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

function mapDispatchToProps(dispatch) {
    return bindActionCreators({sendLoginRequest: sendLoginRequest}, dispatch)
  }
  export default connect(null,mapDispatchToProps)(LoginPage);