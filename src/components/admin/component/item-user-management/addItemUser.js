import React, {Component} from 'react';
import {Button, Modal} from 'react-bootstrap';
import {NotificationManager} from 'react-notifications';
import {v4 as uuidv4} from 'uuid';
import callApi from '../../../../common/callAPI';
import {connect} from 'react-redux';
import {showForm} from '../../../../action/adminManager';
import {closeForm} from '../../../../action/adminManager';
import {actAddData} from '../../../../action/adminManager';
import {updateData} from '../../../../action/adminManager';
import SearchUser from './searchUser';

class AddItemUser extends Component {
  constructor() {
    super();

    this.id = '';
    this.inputUsersName = React.createRef();
    this.inputEmail = React.createRef();
    this.inputPassWord = React.createRef();
    this.inputPassWordAgain = React.createRef();
    this.inputFirtName = React.createRef();
    this.inputLastName = React.createRef();
  }

  handleClose = () => {
    this.props.handleClose();
  };

  handleShow = () => {
    this.props.handleShow();
  };

  componentDidUpdate() {
    if (this.props.idEdit) {
      callApi(`Users/${this.props.idEdit}`, 'GET', null).then((res) => {
        console.log('dataEdit', res);
        if (res.status === 200) {
          this.id = res.data.id;
          this.inputUsersName.current.value = res.data.usersName;
          this.inputEmail.current.value = res.data.gmail;
          this.inputFirtName.current.value = res.data.firtName;
          this.inputLastName.current.value = res.data.lastName;
        }
      });
    }
  }
  checkUsersNameDuplicate = () => {
    callApi(
      `Users?usersName=${this.inputUsersName.current.value}`,
      'Get',
      null
    ).then((res) => {
      if (res.data.length === 0) {
        if (this.checkPassword()){
          this.handleLogin();
        }
        return false;
      } else {
        NotificationManager.warning('Warning message', 'User Đã Tồn Tại');
        return true;
      }
    });
  };

  checkEmaillicate = () => {
    callApi(`Users?gmail=${this.inputEmail.current.value}`, 'Get', null).then(
      (res) => {
        if (res.data.length === 0) {
          const regexp = /\S+@\S+\.\S+/;
          const checkingResult = regexp.exec(this.inputEmail.current.value);
          if (checkingResult === null) {
            NotificationManager.warning(
              'Warning message',
              'Email phải có dạng Ex:abc@abc.com'
            );
            return false;
          }
          this.checkUsersNameDuplicate();
          return false;
        } else {
          NotificationManager.warning('Warning message', 'Email Đã Tồn Tại');
          return true;
        }
      }
    );
  };

  checkPassword = () => {
    const regexp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    const checkingResult = regexp.exec(this.inputPassWord.current.value);
    if (checkingResult === null) {
      NotificationManager.warning(
        'Warning message',
        'Mật Khẩu phải có 6 ký tự chữ và số và bắt đầu bằng ký tự chữ'
      );
      return false;
    } else return true;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const username = this.inputUsersName.current.value;
    const email = this.inputEmail.current.value;
    const password = this.inputPassWord.current.value;
    const confirmPassword = this.inputPassWordAgain.current.value;

    if (
      username !== '' &&
      email !== '' &&
      password !== '' &&
      confirmPassword !== ''
    ) {
      if (password !== confirmPassword) {
        NotificationManager.warning(
          'Warning message',
          'Nhập Lại Mật Khẩu Chưa Đúng'
        );
        return false;
      }
      this.checkEmaillicate();
    } else {
      NotificationManager.warning(
        'Warning message',
        'Phải Nhập Đầy Đủ Thông Tin'
      );
    }
  };

  handleLogin = () => {
    if (this.id) {
      const data = {
        id: this.id,
        firtName: this.inputFirtName.current.value,
        lastName: this.inputLastName.current.value,
        usersName: this.inputUsersName.current.value,
        password: this.inputPassWord.current.value,
        role: 'menber',
        gmail: this.inputEmail.current.value,
      };
      this.props.handleUpdate(data);
      callApi(`Users/${this.id}`, 'PUT', data).then((res) => {
        if (res && res.status === 200) {
          NotificationManager.success(
            'Success message',
            'Thay Đổi Thông Tin Thành Công'
          );
        } else
          NotificationManager.error(
            'Error message',
            'Thay Đổi Thông Tin Thất Bại'
          );
      });
      this.id = '';
    } else {
      const user = {
        id: uuidv4(),
        firtName: this.inputFirtName.current.value,
        lastName: this.inputLastName.current.value,
        usersName: this.inputUsersName.current.value,
        password: this.inputPassWord.current.value,
        role: 'menber',
        gmail: this.inputEmail.current.value,
      };

      callApi(`Users`, 'Post', user).then((res) => {
        if (res && res.status === 201) {
          NotificationManager.success(
            'Success message',
            'Tạo Tài Khoản Thành Công'
          );
          this.props.onAddData(user);
          this.handleClose();
        } else
          NotificationManager.error('Error message', 'Tạo Tài Khoản Thất Bại');
      });
    }
  };

  render() {
    return (
      <>
        <div className="d-flex justify-content-between mb-3">
          <Button variant="secondary" onClick={() => this.handleShow()}>
            <i className="fas fa-user-plus"></i> Add User
          </Button>
          <SearchUser />
        </div>

        <Modal show={this.props.show} onHide={() => this.handleClose()}>
          <Modal.Header closeButton>
            <Modal.Title>ADD USER</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div className="form-group">
                <label>User Name: </label>
                <input
                  ref={this.inputUsersName}
                  type="text"
                  className="form-control"
                  placeholder="User Name"
                />
              </div>

              <div className="form-group">
                <label>Gmail: </label>
                <input
                  ref={this.inputEmail}
                  type="text"
                  className="form-control"
                  placeholder="Email"
                />
              </div>

              <div className="form-group">
                <label>First Name : </label>
                <input
                  ref={this.inputFirtName}
                  type="text"
                  className="form-control"
                  placeholder="First Name"
                />
              </div>

              <div className="form-group">
                <label>Last Name: </label>
                <input
                  ref={this.inputLastName}
                  type="text"
                  className="form-control"
                  placeholder="Last Name"
                />
              </div>

              <div className="form-group">
                <label>Password: </label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  ref={this.inputPassWord}
                  name="password"
                />
              </div>

              <div className="form-group">
                <label>Password Again: </label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password again"
                  ref={this.inputPassWordAgain}
                  name="confirmPassword"
                />
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => this.handleClose()}>
              Close
            </Button>
            <button
              className="btn btn-primary"
              onClick={this.handleSubmit}
              type="submit"
            >
              Save
            </button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  console.log('stateEdit', state);
  return {
    idEdit: state.editingItem.id,
    show: state.editingItem.show,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onAddData: (data) => dispatch(actAddData(data)),
    handleShow: () => dispatch(showForm()),
    handleClose: () => dispatch(closeForm()),
    handleUpdate: (data) => dispatch(updateData(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddItemUser);