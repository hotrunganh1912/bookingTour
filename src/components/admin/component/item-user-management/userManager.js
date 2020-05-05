import React, {Component} from 'react';
import ItemUserMangement from './itemUserMangement';
import callApi from '../../../../common/callAPI';
import AddItemUser from './addItemUser';
import {connect} from 'react-redux';
import {actFetchData} from '../../../../action/adminManager';

class UserManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataUsers: [],
    };
  }

  componentDidMount() {
    callApi(`Users`, 'GET', null).then((res) => {
      if (res.data.length > 0) {
        console.log('Res.data dataUsers', res.data);
        this.props.fetchAllData(res.data)
      } else this.props.fetchAllData();
    });
  };
  render() {
    const {dataUsers} = this.props;
    let itemUsers = dataUsers.map((item, index) => {
      return <ItemUserMangement key={index} dataUser={item} />;
    });
    return (
      <div className="card text-center">
        <h5 className="card-header bg-secondary text-light">
          <i className="fas fa-users"></i> USER MANAGEMENT
        </h5>
        <div className="card-body">
          <AddItemUser />
          <table className="table table-bordered table-striped">
            <thead>
              <tr className="bg-light">
                <th>User Name</th>
                <th>Email</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>{itemUsers}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
    console.log('stateUserManagers', state);
    return {
        dataUsers: state.adminItems,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchAllData: (data) => dispatch(actFetchData(data)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManager);
