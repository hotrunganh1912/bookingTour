import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import callApi from '../../../common/callAPI';
import {connect} from 'react-redux';
import {recover} from '../../../action/users';
// import FormError from "./FormError";

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
          alert('Email chưa đúng');
          return false;
        } else {
          this.props.dispatchRecover(res.data[0].gmail);
          this.props.history.push('/recover/re-register');
          return true;
        }
      }
    );
  };

  onCheckEmail = (e) => {
    e.preventDefault();
    const email = this.inputEmail.current.value;
    console.log('email', email);
    if (email !== '') {
      this.checkEmaillicate();
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
                // onChange={this.handleInput}
                // onKeyUp={this.handleInputValidation}
              />
              {/* <FormError errorMessage={this.state.email.errorMessage} /> */}
            </div>
            <button type="submit" className="btn btn-primary btn-block">
              Tiếp Tục
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
const mapDispatchToProps = (dispatch) => {
  return {
    dispatchRecover: (email) => dispatch(recover(email)),
  };
};

export default connect(null, mapDispatchToProps)(Recover);
