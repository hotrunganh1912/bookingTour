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
    this._limit = 8;
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


  render() {
      const { bookingTours } = this.state;
    let itemBookingManager = bookingTours.map( (item, index) => {
        return <ItemBookingManagement key={index} dataBooking={item} index={index} />
    });
    return (
      <div className="card text-center">
        <h5 className="card-header bg-info text-light">
        <i className="far fa-calendar-alt"></i> BOOKING MANAGEMENT
        </h5>
        <div className="card-body">
          <table className="table table-bordered table-striped">
            <thead>
              <tr className="bg-secondary text-light">
                <th>Num</th>
                <th><i className="far fa-user"></i> User Name</th>
                <th><i className="far fa-calendar-check"></i> Tour Booked</th>
                <th><i className="fas fa-money-check-alt"></i> Total</th>
                <th>Detail</th>
              </tr>
            </thead>
            <tbody>
              {itemBookingManager}
            </tbody>
          </table>
          {/* <MyPagination
            nextPage={this.nextPage}
            prePage={this.prePage}
            data={this.props.dataUsers}
            _limit={this._limit}
            currentPage={this.state.currentPage}
          /> */}
        </div>
      </div>
    );
  }
}

export default BookingManagement;
