import React, {Component} from 'react';
import './login.css';
import callApi from '../../../common/callAPI';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {login} from '../../../action/users';
import FormError from './FormError';
// import { createHashHistory } from "history";

class Login extends Component {
  constructor(props) {
    super(props);
    // this.textInput = React.createRef();
    // this.state = { isLogin: false };
    this.state = {
      username: {
        errorMessage: '',
      },
      password: {
        errorMessage: '',
      },
    };
    this.inputUsersName = React.createRef();
    this.inputPassWord = React.createRef();
  }

  validateInput = (type, checkingText) => {
    // let dataUser = JSON.parse(localStorage.getItem(checkingText));
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
  };

  getValueInput = (name) => {
    switch (name) {
      case 'username':
        return this.inputUsersName.current.value;
      case 'password':
        return this.inputPassWord.current.value;
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
    callApi(
      `users?usersName=${this.inputUsersName.current.value}`,
      'Get',
      null
    ).then((res) => {
      if (
        res.data[0] &&
        res.data[0].password === this.inputPassWord.current.value
      ) {
        localStorage.setItem('Token', JSON.stringify(res.data[0]));
        // this.setState({
        //   isLogin: true
        // });
        alert('Đăng Nhập Thành Công');
        this.props.dispatchLogin();
      } else {
        this.inputPassWord.current.value = '';
        this.inputUsersName.current.value = '';
        alert('Đăng Nhập Thất Bại');
      }
    });
    e.preventDefault();
  };

  render() {
    if (
      this.props.dataLogin.users.loggedIn ||
      localStorage.getItem('Token') !== null
    ) {
      this.props.history.goBack();
      return null;
    }

    return (
      <div className="container ">
        <div className="border p-3 w-75 mx-auto rounded-lg bg-white login-bg ">
          <form onSubmit={this.handleSubmit}>
            <h3 className="text-center">Đăng Nhập</h3>

            <div className="form-group">
              <label>Users Name: </label>
              <input
                ref={this.inputUsersName}
                type="text"
                className="form-control"
                placeholder="User email"
                name="username"
                onChange={this.handleInput}
                onKeyUp={this.handleInputValidation}
              />
              <FormError errorMessage={this.state.username.errorMessage} />
            </div>

            <div className="form-group">
              <label>Password: </label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                ref={this.inputPassWord}
                name="password"
                onChange={this.handleInput}
                onKeyUp={this.handleInputValidation}
              />
              <FormError errorMessage={this.state.password.errorMessage} />
            </div>

            <button type="submit" className="btn btn-primary btn-block">
              Login
            </button>
            <p className="forgot-password text-right mt-3">
              Chưa Có Tài khoản <Link to="/register">Tạo Tài Khoản</Link>
            </p>
            <p className="forgot-password text-right mt-3">
              <Link to="/recover">Quên mật khẩu?</Link>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dataLogin: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchLogin: () => dispatch(login()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
