import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import callApi from '../../../common/callAPI';
import {connect} from 'react-redux';
import {recover} from '../../../action/users';
import FormError from "./FormError";
import {NotificationManager} from 'react-notifications';

class Recover extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: {
        errorMessage: '',
      },
    };
    this.inputEmail = React.createRef();
  }

  checkEmaillicate = () => {
    callApi(`users?gmail=${this.inputEmail.current.value}`, 'Get', null).then(
      (res) => {
        if (res.data.length === 0) {
          NotificationManager.warning(
            "Warning message",
            "Email Chưa Đúng"
          );
          return false;
        } else {
          this.props.dispatchRecover(res.data[0].id);
          this.props.history.push('/recover/re-register');
          return true;
        }
      }
    );
  };

  validateInput = (type, checkingText) => {
    if (type === "email") {
        const regexp = /\S+@\S+\.\S+/;
        const checkingResult = regexp.exec(checkingText);
        if (checkingResult !== null) {
          return { errorMessage: "" };
        } else {
          return {
            errorMessage: "email must be Ex:abc@abc.com",
          };
        }
      }
  };

  componentDidMount() {
    console.log('loggedIn', this.props.loggedIn);
    if (this.props.loggedIn !== false) {
      this.props.history.push('/home');
    }
  }

  handleInputValidation = (e) => {
    const { name } = e.target;
    const { errorMessage } = this.validateInput(name, this.inputEmail.current.value);
    const newState = { ...this.state[name] };
    newState.errorMessage = errorMessage;
    this.setState({ [name]: newState });
  };

  onCheckEmail = (e) => {
    e.preventDefault();
    const email = this.inputEmail.current.value;
    if (email !== '') {
      this.checkEmaillicate();
    } else {
      NotificationManager.warning(
        "Warning message",
        "Chưa Nhập Thông Tin"
      );
    }
  };
  render() {
    return (
      <div className="container">
        <div className="border p-3 w-50 mx-auto rounded-lg bg-white login-bg">
          <form onSubmit={this.onCheckEmail}>
            <h3 className="text-center mb-4">Lấy Lại Mật Khẩu</h3>
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
            <button type="submit" className="btn btn-primary btn-block">
              Tiếp Tục
            </button>
            <p className="forgot-password text-right mt-3">
              Chưa có tài khoản? <Link to="/register">Tạo tài khoản mới</Link>
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

const mapStateToProps = state => {
  return {
    loggedIn: state.users.loggedIn
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    dispatchRecover: (id) => dispatch(recover(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Recover);
