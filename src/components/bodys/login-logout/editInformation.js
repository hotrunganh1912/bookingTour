import React, {Component} from 'react';
import FormError from './FormError';
import {Link} from 'react-router-dom';
import callApi from '../../../common/callAPI';

class EditInformation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: {
        errorMessage: '',
      },
      email: {
        errorMessage: '',
      },
      firstname: {
        errorMessage: '',
      },
      lastname: {
        errorMessage: '',
      },
      password: {
        errorMessage: '',
      },
      confirmPassword: {
        errorMessage: '',
      },
      id: '',
    };
    this.inputUsersName = React.createRef();
    this.inputEmail = React.createRef();
    this.inputPassWord = React.createRef();
    this.inputPassWordAgain = React.createRef();
    this.inputFirtName = React.createRef();
    this.inputLastName = React.createRef();
  }

  validateInput = (type, checkingText) => {
    if (checkingText === '') {
      return {errorMessage: 'must enter information'};
    }

    if (type === 'username') {
      const regexp = /^[a-zA-Z0-9.]+$/;
      const checkingResult = regexp.exec(checkingText);
      if (checkingResult !== null) {
        return {errorMessage: ''};
      } else {
        return {
          errorMessage: 'The user only uses words and no special characters',
        };
      }
    }

    if (type === 'email') {
      const regexp = /\S+@\S+\.\S+/;
      const checkingResult = regexp.exec(checkingText);
      if (checkingResult !== null) {
        return {errorMessage: ''};
      } else {
        return {
          errorMessage: 'email must be Ex:abc@abc.com',
        };
      }
    }

    if (type === 'firstname') {
      const regexp = /^[a-zA-Z ]+$/;
      const checkingResult = regexp.exec(checkingText);
      if (checkingResult !== null) {
        return {errorMessage: ''};
      } else {
        return {
          errorMessage: 'First Name only uses words and no special characters',
        };
      }
    }

    if (type === 'lastname') {
      const regexp = /^[a-zA-Z ]+$/;
      const checkingResult = regexp.exec(checkingText);
      if (checkingResult !== null) {
        return {errorMessage: ''};
      } else {
        return {
          errorMessage: 'Last Name only uses words and no special characters',
        };
      }
    }

    if (type === 'password') {
      const regexp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
      const checkingResult = regexp.exec(checkingText);
      if (checkingResult !== null) {
        return {errorMessage: ''};
      } else {
        return {
          errorMessage:
            'password must be at least 6 characters long and be a letter',
        };
      }
    }

    if (type === 'confirmPassword') {
      const regexPass = this.inputPassWord.current.value;
      if (checkingText === regexPass) {
        return {errorMessage: ''};
      } else {
        return {
          errorMessage: 'password is incorrect',
        };
      }
    }
  };

  componentDidMount() {
    const data = JSON.parse(localStorage.getItem('Token'));
    console.log('dataToken', data);
    this.inputUsersName.current.value = data.usersName;
    this.inputEmail.current.value = data.gmail;
    this.inputFirtName.current.value = data.firtName;
    this.inputLastName.current.value = data.lastName;
    this.setState({id: data.id});
  }
  getValueInput = (name) => {
    switch (name) {
      case 'username':
        return this.inputUsersName.current.value;
      case 'email':
        return this.inputEmail.current.value;
      case 'firstname':
        return this.inputFirtName.current.value;
      case 'lastname':
        return this.inputLastName.current.value;
      case 'password':
        return this.inputPassWord.current.value;
      case 'confirmPassword':
        return this.inputPassWordAgain.current.value;
      default:
        break;
    }
  };

  handleInputValidation = (e) => {
    const {name} = e.target;
    const {errorMessage} = this.validateInput(name, this.getValueInput(name));
    const newState = {...this.state[name]};
    newState.errorMessage = errorMessage;
    this.setState({[name]: newState});
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const password = this.inputPassWord.current.value;
    const confirmPassword = this.inputPassWordAgain.current.value;
    if (password !== '' && confirmPassword !== '') {
      if (password !== confirmPassword) {
        alert('Nhập lại password chưa đúng');
        return false;
      }
      this.handleLogin();
    } else alert('Chưa nhập password');
  };

  handleLogin = () => {
    const user = {
      id: this.state.id,
      firtName: this.inputFirtName.current.value,
      lastName: this.inputLastName.current.value,
      usersName: this.inputUsersName.current.value,
      password: this.inputPassWord.current.value,
      role: 'menber',
      gmail: this.inputEmail.current.value,
    };

    callApi(`users/${this.state.id}`, 'Put', user).then((res) => {
      if (res && res.status === 200) {
        localStorage.setItem('Token', JSON.stringify(res.data));
        alert('Chỉnh sửa thành công');
        this.props.history.push('/home');
      } else alert('Chỉnh sửa thất bại');
    });
  };
  render() {
    return (
      <div className="container">
        <div className="border p-3 w-50 mx-auto rounded-lg bg-white login-bg ">
          <form onSubmit={this.handleSubmit}>
            <h3 className="text-center">Chỉnh Sửa Trang Cá Nhân</h3>

            <div className="form-group">
              <label>User Name: </label>
              <input
                ref={this.inputUsersName}
                type="text"
                className="form-control"
                placeholder="Enter User Name"
                name="username"
                onKeyUp={this.handleInputValidation}
              />
              <FormError errorMessage={this.state.username.errorMessage} />
            </div>

            <div className="form-group">
              <label>Gmail: </label>
              <input
                ref={this.inputEmail}
                type="text"
                className="form-control"
                placeholder="Enter email"
                name="email"
                onKeyUp={this.handleInputValidation}
              />
              <FormError errorMessage={this.state.email.errorMessage} />
            </div>

            <div className="form-group">
              <label>First Name : </label>
              <input
                ref={this.inputFirtName}
                type="text"
                className="form-control"
                placeholder="Enter First Name"
                name="firstname"
                onKeyUp={this.handleInputValidation}
              />
              <FormError errorMessage={this.state.firstname.errorMessage} />
            </div>

            <div className="form-group">
              <label>Last Name: </label>
              <input
                ref={this.inputLastName}
                type="text"
                className="form-control"
                placeholder="Enter Last Name"
                name="lastname"
                onKeyUp={this.handleInputValidation}
              />
              <FormError errorMessage={this.state.lastname.errorMessage} />
            </div>

            <div className="form-group">
              <label>Password: </label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                ref={this.inputPassWord}
                name="password"
                onKeyUp={this.handleInputValidation}
              />
              <FormError errorMessage={this.state.password.errorMessage} />
            </div>

            <div className="form-group">
              <label>Password Again: </label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                ref={this.inputPassWordAgain}
                name="confirmPassword"
                onKeyUp={this.handleInputValidation}
              />
              <FormError
                errorMessage={this.state.confirmPassword.errorMessage}
              />
            </div>

            <button type="submit" className="btn btn-primary btn-block">
              Chỉnh Sửa
            </button>
            <p className="forgot-password text-right mt-3">
              <Link to="/home">Quay lại Trang Chủ</Link>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

export default EditInformation;
