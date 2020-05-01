import React, {Component} from 'react';
import ItemHistory from './ItemHistory';
import callApi from '../../../common/callAPI';
import {connect} from 'react-redux';

class HistoryBooking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookingTour: [],
      isExchanged: '',
      userName: '',
      isUnmounting: false,
    };
  }

  componentDidMount() {
    console.log('loggedIn', this.props.loggedIn);
    const userID = JSON.parse(localStorage.getItem('Token')).id;
    callApi(`Users/${userID}`, 'GET', null).then((res) => {
      if (res.status === 200 && res) {
        this.setState({
          userName: res.data.firtName + ' ' + res.data.lastName,
        });
      }
    });
    callApi(`bookings_tour?userID=${userID}`, 'GET', null).then((res) => {
      console.log('data', res.data);
      if (res.status === 200 && res && !this.state.isUnmounting) {
        this.setState({
          bookingTour: res.data,
          isExchanged: res.data.length === 0 ? '' : res.data[0].id,
        });
        console.log('stateHistory', this.state);
      } else this.setState({isExchanged: ''});
    });
  }
  componentDidUpdate() {
    if (this.props.loggedIn === false) {
      return this.props.history.push('/home');
    }
  }

  componentWillUnmount() {
    this.setState({
        isUnmounting: true, 
        isExchanged: false
    });
  }

  render() {
    let itemHistory = this.state.bookingTour.map((item, index) => {
      return <ItemHistory key={index} data={item} index={index} />;
    });
    console.log('this.state.isExchange', this.state.isExchanged);
    return (
      <div className="container">
        <div className="card card-primary mt-3 text-center">
          <div className="card-header bg-info">
            <h3 className="card-title text-white text-uppercase mt-3">
              Lịch Sử Giao Dịch
            </h3>
            <div className="row">
              <div className="col-6 text-left text-white">
                Booking By :{' '}
                <strong className="text-uppercase">
                  {this.state.userName}
                </strong>
              </div>
              <div className="col-6 text-right text-warning">
                <strong className="text-uppercase">
                  {this.state.isExchanged !== '' ? '' : 'Chưa có lịch sử giao dịch'}
                </strong>
              </div>
            </div>
          </div>
          <div className="card-body">
            <table className="table table-bordered table-hover">
              <thead>
                <tr className="bg-light">
                  <th>STT</th>
                  <th>Tên Tour</th>
                  <th>Giá</th>
                  <th>Thời Gian Giao Dịch</th>
                  <th>Chi Tiết</th>
                </tr>
              </thead>
              <tbody>{itemHistory}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log('stateHistoryBooking', state);
  let loggedIn = state.users.loggedIn;
  return {loggedIn};
};

export default connect(mapStateToProps, null)(HistoryBooking);
