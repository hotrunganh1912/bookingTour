import React, {Component} from 'react';
import MyPagination from '../../../../common/my-pagination';
import ItemBookingManagement from './itemBookingManagement';
import callApi from '../../../../common/callAPI';

class BookingManagement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookingTours: [],
      data: [],
      indexDataRender: 0,
      currentPage: 1,
    };
    this._limit = 6;
  }

  componentDidMount() {
    callApi(`data_tours_booked`, 'get', null).then((res) => {
      if (res.status === 200) {
        this.setState({
          bookingTours: res.data,
        });
        console.log('state.bookingTours', this.state.bookingTours);
      }
    });
  }

  nextPage = (number) => {
    this.setState({
      indexDataRender: number * this._limit,
      currentPage: this.state.currentPage + 1,
    });
  };
  prePage = (number) => {
    this.setState({
      indexDataRender: (number - 2) * this._limit,
      currentPage: this.state.currentPage - 1,
    });
  };

  pagination = () => {
    let datanew = [];
    if (this.state.bookingTours.length <= 0) return;
    let end =
      this.state.indexDataRender + this._limit >= this.state.bookingTours.length
        ? this.state.bookingTours.length
        : this.state.indexDataRender + this._limit;

    if (this.state.bookingTours.length === 1)
      return this.state.bookingTours;
    for (let i = this.state.indexDataRender; i < end; i++) {
      datanew.push(this.state.bookingTours[i]);
    }
    return datanew;
  };

  render() {
    let itemBookingManager = this.pagination()&&this.pagination().map( (item, index) => {
        return <ItemBookingManagement key={index} dataBooking={item} index={index} />
    });
    return (
      <div className="card text-center">
        <h5 className="card-header bg-info text-light">
        <i className="far fa-calendar-alt"></i> QUẢN LÝ BOOKING
        </h5>
        <div className="card-body">
          <table className="table table-bordered table-striped">
            <thead>
              <tr className="bg-secondary text-light">
                <th>STT</th>
                <th><i className="far fa-user"></i> Tên Người Dùng</th>
                <th><i className="far fa-calendar-check"></i> Tour Đã Đặt</th>
                <th><i className="fas fa-money-check-alt"></i> Tổng Tiền</th>
                <th>Chi Tiết</th>
              </tr>
            </thead>
            <tbody>
              {itemBookingManager}
            </tbody>
          </table>
          <MyPagination
            nextPage={this.nextPage}
            prePage={this.prePage}
            data={this.state.bookingTours}
            _limit={this._limit}
            currentPage={this.state.currentPage}
          />
        </div>
      </div>
    );
  }
}

export default BookingManagement;
