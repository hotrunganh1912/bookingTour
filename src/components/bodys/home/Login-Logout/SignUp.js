import React, {Component} from 'react';
import FormError from './FormError';

class SignUp extends Component {
    constructor (props) {
        super(props);
        this.state = {
            username: {
                value: '',
                isInputValid: true, 
                errorMessage: ''
            },
            email: {
                value : '',
                isInputValid: true, 
                errorMessage: ''
            },
            password: {
                value : '',
                isInputValid: true, 
                errorMessage: ''
            }
        }
    }

    validateInput = (type, checkingText) => {
        // let dataUser = JSON.parse(localStorage.getItem(checkingText));
        if (checkingText === '') {
            return { isInputValid: false,
                    errorMessage: 'must enter information'
            }
        }

        if (type === "username") {
            const regexp = /^[a-zA-Z ]+$/;
            const checkingResult = regexp.exec(checkingText);
            const dataUser = JSON.parse(localStorage.getItem(checkingResult));
            if (dataUser) {
                return { isInputValid: false,
                         errorMessage: 'The username has been registered'}
            } else if (checkingResult !== null) {
                return { isInputValid: true,
                         errorMessage: ''};
            }
            else {
                return { isInputValid: false,
                         errorMessage: 'The user only uses words and no special characters'};
            }
        }

        if (type === "email") {
            const regexp = /\S+@\S+\.\S+/;
            const checkingResult = regexp.exec(checkingText);
            if (checkingResult !== null) {
                return { isInputValid: true,
                         errorMessage: ''};
            } else {
                return { isInputValid: false,
                         errorMessage: 'email must be Ex:abc@abc.com'};
            }
        }

        if (type === "password") {
            const regexp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
            const checkingResult = regexp.exec(checkingText);
            if (checkingResult !== null) {
                return { isInputValid: true,
                         errorMessage: ''};
            } else {
                return { isInputValid: false,
                         errorMessage: 'password must be at least 8 characters long and be a letter'};
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
        e.preventDefault()
        let { username, email, password } = this.state;
        if (username.isInputValid === true && email.isInputValid === true && password.isInputValid === true) {
            this.props.onSubmit(this.state);
            return true;
        } else {
            alert('check the registration information');
            return false;
        }
        this.onClear();
    }

    onClear = () => {
        this.setState({
            username: {
                value: '',
                isInputValid: true, 
                errorMessage: ''
            },
            email: {
                value : '',
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
      <form id="register-form" action="#" method="post" role="form" onSubmit={ this.onSubmit }>
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
            type="email"
            name="email"
            id="email"
            tabIndex="1"
            className="form-control"
            placeholder="Email Address"
            value={ this.state.email.value }
            onChange={this.handleInput}
            onKeyUp={this.handleInputValidation}
          />
          <FormError
            type="email"
            errorMessage={this.state.email.errorMessage}
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
                name="register-submit"
                id="register-submit"
                tabIndex="4"
                className="form-control btn btn-register btn-outline-info"
                value="Sign up"
              />
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default SignUp;
