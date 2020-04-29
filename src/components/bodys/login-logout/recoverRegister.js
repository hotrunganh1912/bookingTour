import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import callApi from '../../../common/callAPI';
import {login} from '../../../action/users';
import FormError from "./FormError";

class RecoverRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: {
        errorMessage: '',
      },
      confirmPassword: {
        errorMessage: '',
      },
      data: {
        usersName: '',
        gmail: '',
        firtName: '',
        lastName: '',
      },
    };
    this.inputPassWord = React.createRef();
    this.inputPassWordAgain = React.createRef();
  }

  componentDidMount() {
    callApi(`users?id=${this.props.id}`, 'GET', null).then((res) => {
        console.log('res.data', res.data);
      if (res.data.length !== 0) {
        this.setState({
          data: {
            usersName: res.data[0].usersName,
            gmail: res.data[0].gmail,
            firtName: res.data[0].firtName,
            lastName: res.data[0].lastName,
          },
        });
      }
    });
  }

  validateInput = (type, checkingText) => {
    if (checkingText === "") {
      return { errorMessage: "must enter information" };
    }
    if (type === "password") {
      const regexp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
      const checkingResult = regexp.exec(checkingText);
      if (checkingResult !== null) {
        return { errorMessage: "" };
      } else {
        return {
          errorMessage:
            "password must be at least 6 characters long and be a letter",
        };
      }
    }

    if (type === "confirmPassword") {
      const regexPass = this.inputPassWord.current.value;
      if (checkingText === regexPass) {
        return { errorMessage: "" };
      } else {
        return {
          errorMessage: "password is incorrect",
        };
      }
    }
  };

  getValueInput = (name) => {
    switch (name) {
      case "password":
        return this.inputPassWord.current.value;
      case "confirmPassword":
        return this.inputPassWordAgain.current.value;
      default:
        break;
    }
  };

  handleInputValidation = (e) => {
    const { name } = e.target;
    const { errorMessage } = this.validateInput(name, this.getValueInput(name));
    const newState = { ...this.state[name] };
    newState.errorMessage = errorMessage;
    this.setState({ [name]: newState });
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
        this.handleRegister();
    } else {
        alert('Nhập thông tin password cần thay đổi');
    }
  };

  handleRegister = () => {
    const user = {
      gmail: this.state.data.gmail,
      firtName: this.state.data.firtName,
      lastName: this.state.data.lastName,
      usersName: this.state.data.usersName,
      password: this.inputPassWord.current.value,
      role: 'menber',
    };
    callApi(`users/${this.props.id}`, 'PUT', user).then((res) => {
      if (res && res.status === 200) {
        localStorage.setItem('Token', JSON.stringify(res.data));
        alert('Thay đổi password thành công');
        this.props.dispatchLogin();
        this.props.history.push('/home');
      } else alert('Thay đổi password thất bại');
    });
  };
  render() {
    return (
      <div className="container">
        <div className="border p-3 w-50 mx-auto rounded-lg bg-white login-bg">
          <form onSubmit={this.handleSubmit}>
            <h3 className="text-center mb-4">Lấy Lại Mật Khẩu</h3>

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
              <FormError errorMessage={this.state.confirmPassword.errorMessage}/>
            </div>
            <button type="submit" className="btn btn-primary btn-block">
              Đăng Ký
            </button>
            <p className="forgot-password text-right mt-3">
              Chưa có tài khoản? <Link to="/login">Tạo tài khoản mới</Link>
            </p>
            <p className="forgot-password text-right mt-3">
              <Link to="/login">Quay lại Đăng Nhập</Link>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('state', state);
  const id = state.recoverUser;
  return {id};
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchLogin: () => dispatch(login()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RecoverRegister);
