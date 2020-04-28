import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import callApi from '../../../common/callAPI';

class RecoverRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: {
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
    };
    this.inputUsersName = React.createRef();
    this.inputPassWord = React.createRef();
    this.inputPassWordAgain = React.createRef();
    this.inputFirtName = React.createRef();
    this.inputLastName = React.createRef();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.handleRegister();
  };

  handleRegister = () => {
    const user = {
        firtName: this.inputFirtName.current.value,
        lastName: this.inputLastName.current.value,
        usersName: this.inputUsersName.current.value,
        password: this.inputPassWord.current.value,
        role: 'menber',
      };
    callApi(`users?gmail=${this.props.email}`, "PUT", user).then((res) => {
    //   if (res.data.length === 0) {
    //     alert('Email chưa đúng');
    //     return false;
    //   } else {
    //     this.props.dispatchRecover(res.data[0].id);
    //     this.props.history.push('/recover/re-register');
    //     return true;
    //   }
    });
  };
  render() {
    return (
      <div className="container">
        <div className="border p-3 w-50 mx-auto rounded-lg bg-white login-bg">
          <form onSubmit={this.handleSubmit}>
            <h3 className="text-center mb-4">Lấy Lại Mật Khẩu</h3>
            <div className="form-group">
              <label>User Name: </label>
              <input
                ref={this.inputUsersName}
                type="text"
                className="form-control"
                placeholder="Enter User Name"
                name="username"
                // onChange={this.handleInput}
                // onKeyUp={this.handleInputValidation}
              />
              {/* <FormError errorMessage={this.state.username.errorMessage} /> */}
            </div>

            <div className="form-group">
              <label>First Name : </label>
              <input
                ref={this.inputFirtName}
                type="text"
                className="form-control"
                placeholder="Enter First Name"
                name="firstname"
                // onChange={this.handleInput}
                // onKeyUp={this.handleInputValidation}
              />
              {/* <FormError errorMessage={this.state.firstname.errorMessage} /> */}
            </div>

            <div className="form-group">
              <label>Last Name: </label>
              <input
                ref={this.inputLastName}
                type="text"
                className="form-control"
                placeholder="Enter Last Name"
                name="lastname"
                // onChange={this.handleInput}
                // onKeyUp={this.handleInputValidation}
              />
              {/* <FormError errorMessage={this.state.lastname.errorMessage} /> */}
            </div>

            <div className="form-group">
              <label>Password: </label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                ref={this.inputPassWord}
                name="password"
                // onChange={this.handleInput}
                // onKeyUp={this.handleInputValidation}
              />
              {/* <FormError errorMessage={this.state.password.errorMessage} /> */}
            </div>

            <div className="form-group">
              <label>Password Again: </label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                ref={this.inputPassWordAgain}
                name="confirmPassword"
                // onChange={this.handleInput}
                // onKeyUp={this.handleInputValidation}
              />
              {/* <FormError errorMessage={this.state.confirmPassword.errorMessage}/> */}
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
  const email = state.recoverUser;
  return {email};
};

export default connect(mapStateToProps, null)(RecoverRegister);
