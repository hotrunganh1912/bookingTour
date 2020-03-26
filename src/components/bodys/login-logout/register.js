import React, { Component } from "react";
import "./login.css";
import callApi from "../../../common/callAPI";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../../action/users";
// import { createHashHistory } from "history";
import { v4 as uuidv4 } from "uuid";

class Register extends Component {
  constructor(props) {
    super(props);
    // this.textInput = React.createRef();
    // this.state = { isLogin: false };

    this.inputUsersName = React.createRef();
    this.inputEmail = React.createRef();
    this.inputPassWord = React.createRef();
    this.inputPassWordAgain = React.createRef();
    this.inputFirtName = React.createRef();
    this.inputLastName = React.createRef();
  }

  checkUsersNameDuplicate = () => {
    callApi(
      `users?usersName=${this.inputUsersName.current.value}`,
      "Get",
      null
    ).then(res => {
      if (res.data.length === 0) {
        this.handleLogin();
        return false;
      } else {
        alert("User Name đã tồn tại");
        return true;
      }
    });
  };

  checkEmaillicate = () => {
    callApi(`users?gmail=${this.inputEmail.current.value}`, "Get", null).then(
      res => {
        if (res.data.length === 0) {
          this.checkUsersNameDuplicate();
          return false;
        } else {
          alert("Email đã tồn tại");
          return true;
        }
      }
    );
  };

  handleSubmit = e => {
    this.checkEmaillicate();
    e.preventDefault();
  };

  handleLogin = () => {
    const user = {
      id: uuidv4(),
      firtName: this.inputFirtName.current.value,
      lastName: this.inputLastName.current.value,
      usersName: this.inputUsersName.current.value,
      password: this.inputPassWord.current.value,
      role: "menber",
      gmail: this.inputEmail.current.value
    };

    callApi(`users`, "Post", user).then(res => {
      if (res.status === 201) {
        localStorage.setItem("Token", JSON.stringify(res.data));
        alert("Tạo Tài Khoản Thành Công");
        this.props.dispatchLogin();
      } else alert("Tạo Tài Khoản Thất  Bại");
    });
  };

  render() {
    console.log("hear :", this.props.dataLogin.loggedIn);

    if (
      this.props.dataLogin.users.loggedIn ||
      localStorage.getItem("Token") !== null
    ) {
      window.console.log("props :", this.props);
      this.props.history.goBack();
      return null;
    }

    return (
      <div className="container ">
        <div className="border p-3 w-75 mx-auto rounded-lg bg-white login-bg ">
          <form onSubmit={this.handleSubmit}>
            <h3 className="text-center">Đăng Ký</h3>

            <div className="form-group">
              <label>User Name: </label>
              <input
                ref={this.inputUsersName}
                type="text"
                className="form-control"
                placeholder="Enter User Name"
              />
            </div>

            <div className="form-group">
              <label>Gmail: </label>
              <input
                ref={this.inputEmail}
                type="text"
                className="form-control"
                placeholder="Enter email"
              />
            </div>

            <div className="form-group">
              <label>First Name : </label>
              <input
                ref={this.inputFirtName}
                type="text"
                className="form-control"
                placeholder="Enter First Name"
              />
            </div>

            <div className="form-group">
              <label>Last Name: </label>
              <input
                ref={this.inputLastName}
                type="text"
                className="form-control"
                placeholder="Enter Last Name"
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
              <label>Password Again: </label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                ref={this.inputPassWordAgain}
              />
            </div>

            <button type="submit" className="btn btn-primary btn-block">
              Đăng Ký
            </button>
            <p className="forgot-password text-right mt-3">
              Đã Có Tài khoản <Link to="/login">Trang đăng nhập</Link>
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
export default connect(mapStateToProps, mapDispatchToProps)(Register);
