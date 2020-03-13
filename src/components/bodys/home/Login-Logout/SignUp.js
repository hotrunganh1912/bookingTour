import React, {Component} from 'react';

class SignUp extends Component {
  render() {
    return (
      <form id="register-form" action="#" method="post" role="form">
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
            type="email"
            name="email"
            id="email"
            tabIndex="1"
            className="form-control"
            placeholder="Email Address"
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
          <input
            type="password"
            name="confirm-password"
            id="confirm-password"
            tabIndex="2"
            className="form-control"
            placeholder="Confirm Password"
          />
        </div>
        <div className="form-group">
          <div className="row justify-content-center">
            <div className="col-6">
              <input
                type="submit"
                name="register-submit"
                id="register-submit"
                tabIndex="4"
                className="form-control btn btn-register btn-outline-info"
                value="Sign up"
                onChange={this.onSignup}
              />
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default SignUp;
