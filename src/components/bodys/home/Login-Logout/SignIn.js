import React, {Component} from 'react';

class SignIn extends Component {
  render() {
    return (
      <form id="login-form" method="post" role="form">
        <div className="form-group">
          <input
            type="text"
            name="username"
            id="username"
            tabIndex="1"
            className="form-control"
            placeholder="Username"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            id="password"
            tabIndex="2"
            className="form-control"
            placeholder="Password"
          />
        </div>
        <div className="form-group">
          <div className="row justify-content-center">
            <div className="col-6">
              <input
                type="button"
                name="login-submit"
                id="login-submit"
                tabIndex="4"
                className="form-control btn btn-login btn-outline-success"
                value="Sign In"
                onChange={this.onSignin}
              />
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default SignIn;
