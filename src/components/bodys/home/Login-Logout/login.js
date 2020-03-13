import React, {Component} from 'react';
import './login.css';
import SignIn from './SignIn';
import SignUp from './SignUp';

class LoginRegister extends Component {
    constructor () {
        super();
        this.state = {
            activeSignin: "active",
            activeSignup: ""
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
                    { (activeSignin === "active") ? <SignIn /> : <SignUp /> }
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
