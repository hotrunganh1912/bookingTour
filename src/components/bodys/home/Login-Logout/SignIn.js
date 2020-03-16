import React, {Component} from 'react';
import FormError from './FormError';

class SignIn extends Component {
    constructor (props) {
        super(props);
        this.state = {
            username: {
                value: '',
                isInputValid: false, 
                errorMessage: ''
            },
            password: {
                value : '',
                isInputValid: false, 
                errorMessage: ''
            }
        }
    }

    validateInput = (type, checkingText) => {
        if (checkingText === '') {
            return { isInputValid: false,
                    errorMessage: 'must enter information'
            }
        }

        if (type === "username") {
            let dataUser = JSON.parse(localStorage.getItem(checkingText));
            if (dataUser) {
                return { isInputValid: true,
                        errorMessage: ''};
            } else {
                return { isInputValid: false,
                        errorMessage: 'username is incorrect'};
            }
        }

        if (type === "password") {
            let dataUser = JSON.parse(localStorage.getItem(this.state.username.value));
            console.log('pass', dataUser);
            if (dataUser[0].password === checkingText) {
                return { isInputValid: true,
                        errorMessage: ''};
            } else {
                return { isInputValid: false,
                        errorMessage: 'password is incorrect'};
            }
        }
    }

    handleInput = (e) => {
        const { name, value } = e.target;
        const newState = {...this.state[name]};
        newState.value = value;
        this.setState({[name]: newState});
    }

    handleInputValidation = (e) => {
        const { name } = e.target;
        const { isInputValid, errorMessage } = this.validateInput(name, this.state[name].value);
        const newState = {...this.state[name]};
        newState.isInputValid = isInputValid;
        newState.errorMessage = errorMessage;
        this.setState({[name]: newState});
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        let { username, password } = this.state;
        if (username.isInputValid === true && password.isInputValid === true) {
            alert('Logged in successfully');
            this.onClear();
            return true;
        } else {
            alert('login unsuccessful');
            return false;
        }
    }

    onClear = () => {
        this.setState({
            username: {
                value: '',
                isInputValid: true, 
                errorMessage: ''
            },
            password: {
                value : '',
                isInputValid: true, 
                errorMessage: ''
            }
        })
    }

  render() {
    return (
      <form id="login-form" method="post" role="form" onSubmit={this.onSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="username"
            id="username"
            tabIndex="1"
            className="form-control"
            placeholder="Username"
            value={ this.state.username.value }
            onChange={this.handleInput}
            onKeyUp={this.handleInputValidation}
          />
          <FormError
            type="username"
            errorMessage={this.state.username.errorMessage}
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
            value={ this.state.password.value }
            onChange={this.handleInput}
            onKeyUp={this.handleInputValidation}
          />
          <FormError
            type="password"
            errorMessage={this.state.password.errorMessage}
          />
        </div>
        <div className="form-group">
          <div className="row justify-content-center">
            <div className="col-6">
              <input
                type="submit"
                name="login-submit"
                id="login-submit"
                tabIndex="4"
                className="form-control btn btn-login btn-outline-success"
                value="Sign In"
              />
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default SignIn;
