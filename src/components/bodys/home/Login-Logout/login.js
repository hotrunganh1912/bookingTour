import React, { Component } from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';
import './login.css';

class LoginRegister extends Component {
    constructor () {
        super();
        this.state = {
            activeSignin: "active",
            activeSignup: "",
            username: [],
            email: [],
            password: []
        }
    }

    onClickSignIn = () => {
        this.setState({
            activeSignin: "active",
            activeSignup: ""
        });
    }

    onClickSignUp = () => {
        this.setState({
            activeSignup: "active",
            activeSignin: ""
        });
    }

    onSignup = (data, dataUsers = []) => {
        let { username, email, password } = this.state;
        console.log(data);

        let dataUsername = {...data.username};
        let dataEmail = {...data.email};
        let dataPassword = {...data.password};
        username.push(dataUsername);
        email.push(dataEmail);
        password.push(dataPassword);

        let dataUser = {
            username: username[0].value,
            email: email[0].value,
            password: password[0].value
        };
        dataUsers.push(dataUser)
        console.log('dataUsers', dataUsers);
        alert('SignUp Success');
        this.setState({
            activeSignin: "active",
            activeSignup: "",
            username: username,
            email: email,
            password: password
        });
        localStorage.setItem(username[0].value, JSON.stringify(dataUsers));
    }
  render() {
    let { activeSignin, activeSignup } = this.state;
    return (
      <div className="container-fluid">
        <div className="row justify-content-md-center">
          <div className="col-4">
            <div className="panel panel-login">
              <div className="panel-heading">
                <div className="row text-center">
                  <div className="col-6">
                    <a href="#" className={ activeSignin } id="login-form-link" onClick={ this.onClickSignIn }>
                      Sign In
                    </a>
                  </div>
                  <div className="col-6">
                    <a href="#" className={ activeSignup } id="register-form-link" onClick={ this.onClickSignUp }>
                      Sign Up
                    </a>
                  </div>
                </div>
                <hr />
              </div>
              <div className="panel-body">
                <div className="row">
                  <div className="col-lg-12">
                    { (activeSignin === "active") ? <SignIn /> : <SignUp onSubmit={this.onSignup}/> }
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginRegister;