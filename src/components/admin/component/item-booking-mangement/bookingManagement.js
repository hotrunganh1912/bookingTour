import React, {Component} from 'react';
import MyPagination from '../../../../common/my-pagination';
import callApi from '../../../../common/callAPI';
import ItemBookingManagement from './itemBookingManagement';

class BookingManagement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookingTours: [],
      keyword: '',
      indexDataRender: 0,
      currentPage: 1,
    };
    this._limit = 10;
    this.inputSearch = React.createRef();
  }

  componentDidMount() {
    callApi(`bookings_tour`, 'get', null).then((res) => {
      if (res.status === 200) {
        this.setState({
          bookingTours: res.data,
        });
      }
    });
  }
  handleSearch = () => {
    const keyword = this.inputSearch.current.value;
    let arrFilter = [];
    if (keyword !== '') {
      console.log('this.state.bookingTours :>> ', this.state.bookingTours);
      this.state.bookingTours.filter((item) => {
        let arrCharState = item.id
          .slice(0, 8)
          .toUpperCase()
          .split(' ')
          .filter((x) => x !== '')
          .join('');
        let arrCharKeyword = keyword
          .toUpperCase()
          .split(' ')
          .filter((x) => x !== '')
          .join('');
        let arrCharUserName = item.userName
          .toUpperCase()
          .split(' ')
          .filter((x) => x !== '')
          .join('');
          let arrCharStatus = item.status
          .toUpperCase()
          .split(' ')
          .filter((x) => x !== '')
          .join('');
        if (arrCharState.includes(arrCharKeyword)) arrFilter.push(item);
        if (arrCharUserName.includes(arrCharKeyword)) arrFilter.push(item);
        if (arrCharStatus.includes(arrCharKeyword)) arrFilter.push(item);
        return [...arrFilter];
      });
      this.setState({
        bookingTours: arrFilter,
        keyword,
      });
    } else {
      callApi(`bookings_tour`, 'get', null).then((res) => {
        if (res && res.status === 200) {
          this.setState({
            bookingTours: res.data,
            keyword: '',
          });
        }
      });
      return;
    }
  };

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

    if (this.state.bookingTours.length === 1) return this.state.bookingTours;
    for (let i = this.state.indexDataRender; i < end; i++) {
      datanew.push(this.state.bookingTours[i]);
    }
    return datanew;
  };

  onBack = () => {
    this.inputSearch.current.value = '';
    callApi(`bookings_tour`, 'get', null).then((res) => {
      if (res.data.length > 0) {
        this.setState({
          bookingTours: res.data,
          keyword: '',
        });
      }
    });
  };

  render() {
    let itemBookingManager =
      this.pagination() &&
      this.pagination().map((item, index) => {
        return (
          <ItemBookingManagement key={index} dataBooking={item} index={index} />
        );
      });
    let styleButtonBack = this.state.keyword
      ? {display: 'block'}
      : {display: 'none'};
    return (
      <div className="card text-center">
        <h5 className="card-header bg-info text-light">
          <i className="far fa-calendar-alt"></i> QUẢN LÝ BOOKING
        </h5>
        <div className="card-body">
          <div className="form-inline my-2 float-right">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={this.onBack}
              style={styleButtonBack}
            >
              <i className="fas fa-arrow-circle-left"></i>
            </button>
            <input
              type="text"
              ref={this.inputSearch}
              className="form-control"
            />
            <button
              type="button"
              className="btn btn-secondary"
              onClick={this.handleSearch}
            >
              <i className="fas fa-search"></i> Search
            </button>
          </div>
          <table className="table table-bordered table-striped">
            <thead>
              <tr className="bg-secondary text-light">
                <th>STT</th>
                <th>
                  <i className="fas fa-id-badge"></i> Booking Code
                </th>
                <th>
                  <i className="far fa-user"></i> User Name
                </th>
                <th>Tour Name</th>
                <th>Price</th>
                <th>Status</th>
                <th>Detail</th>
              </tr>
            </thead>
            <tbody>{itemBookingManager}</tbody>
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
