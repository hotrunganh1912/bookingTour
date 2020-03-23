import React, { Component } from "react";
import "./login.css";
import callApi from "../../../common/callAPI";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../../action/users";
import { createHashHistory } from "history";

class Login extends Component {
  constructor(props) {
    super(props);
    // this.textInput = React.createRef();
    // this.state = { isLogin: false };
    this.inputUsersName = React.createRef();
    this.inputPassWord = React.createRef();
  }

  handleSubmit = e => {
    callApi(
      `users?usersName=${this.inputUsersName.current.value}`,
      "Get",
      null
    ).then(res => {
      if (
        res.data[0] &&
        res.data[0].password === this.inputPassWord.current.value
      ) {
        localStorage.setItem("Token", JSON.stringify(res.data[0]));
        // this.setState({
        //   isLogin: true
        // });
        alert("Đăng Nhập Thành Công");
        this.props.dispatchLogin();
      } else alert("Đăng Nhập Thất Bại");
    });
    e.preventDefault();
  };

  render() {
    console.log("hear :", this.props.dataLogin.loggedIn);

    if (
      this.props.dataLogin.users.loggedIn ||
      localStorage.getItem("Token") !== null
    ) {
      const history = createHashHistory();
      console.log("props :", history);
      return <Redirect to="/" />;
    }

    return (
      <div className="container ">
        <div className="border p-3 w-75 mx-auto rounded-lg bg-white login-bg ">
          <form onSubmit={this.handleSubmit}>
            <h3 className="text-center">Đăng Nhập</h3>

            <div className="form-group">
              <label>Gmail: </label>
              <input
                ref={this.inputUsersName}
                type="text"
                className="form-control"
                placeholder="Enter email"
              />
            </div>

            <div className="form-group">
              <label>Password: </label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                ref={this.inputPassWord}
              />
            </div>

            <div className="form-group">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck1"
                />
                <label className="custom-control-label" htmlFor="customCheck1">
                  Remember me
                </label>
              </div>
            </div>

            <button type="submit" className="btn btn-primary btn-block">
              Login
            </button>
            <p className="forgot-password text-right mt-3">
              Chưa Có Tài khoản <a href="#"> Tạo Tài Khoản</a>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("state  :", state);
  return {
    dataLogin: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatchLogin: () => dispatch(login())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
