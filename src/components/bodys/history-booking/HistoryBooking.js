import React, { Component } from "react";
import ItemHistory from "./ItemHistory";
import callApi from "../../../common/callAPI";
import { connect } from "react-redux";
import MyPagination from "../../../common/my-pagination";
import Waiting from "../../../common/waiting";

class HistoryBooking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookingTour: [],
      isExchanged: "",
      userName: "",
      isUnmounting: false,
      indexDataRender: 0,
      currentPage: 1,
    };
    this._limit = 10;
  }

  componentDidMount() {
    const userID = JSON.parse(localStorage.getItem("Token")).id;
    callApi(`Users/${userID}`, "GET", null).then((res) => {
      if (res && res.status === 200) {
        this.setState({
          userName: res.data.usersName,
        });
      } else this.setState({});
    });
    callApi(`bookings_tour?userID=${userID}`, "GET", null).then((res) => {
      if (res && res.status === 200 && !this.state.isUnmounting) {
        this.setState({
          bookingTour: res.data,
          isExchanged: res.data.length === 0 ? "" : res.data[0].id,
        });
        console.log("stateHistory", this.state);
      } else this.setState({ isExchanged: "" });
    });
    this.setDataToursBooked();

  }
  getRandomColor = () => {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  setDataToursBooked = () => {
    if (this.state.bookingTour.length > 0) {
      let dataPrice = [];
      let total = 0;
      let tourBooked = this.state.bookingTour.length;
      this.state.bookingTour.forEach(item => {
        dataPrice.push(item.sumPrice);
        return;
      });
      if (dataPrice.length === 1) total = dataPrice[0];
      dataPrice.reduce((a,b) => total = a+b);
      console.log('this.total :>> ', total + ' ' + tourBooked);
      let dataTours = {
        id: this.state.bookingTour[0].userID,
        userName: this.state.bookingTour[0].userName,
        tourBooked: tourBooked,
        total: total,
        color: this.getRandomColor()
      };
      return {...dataTours};
    }
  }
  componentDidUpdate() {
    if (this.props.loggedIn === false) {
      return this.props.history.push("/home");
    }
    if (this.state.bookingTour.length > 0) {
      if(this.state.bookingTour.length === 1) {
        callApi(`data_tours_booked`, 'Post', this.setDataToursBooked()).then(res => {});
      } else callApi(`data_tours_booked/${this.state.bookingTour[0].userID}`, 'Put', this.setDataToursBooked()).then(res => {});
    }
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
    if (this.state.bookingTour.length <= 0) return;
    let end =
      this.state.indexDataRender + this._limit >= this.state.bookingTour.length
        ? this.state.bookingTour.length
        : this.state.indexDataRender + this._limit;

    if (this.state.bookingTour.length === 1)
      return this.state.bookingTour;
    for (let i = this.state.indexDataRender; i < end; i++) {
      datanew.push(this.state.bookingTour[i]);
    }
    return datanew;
  };

  render() {
    return this.state.bookingTour.length !== 0 ? (
      <div className="container">
        <div className="card card-primary mt-3 text-center">
          <div className="card-header bg-info">
            <h3 className="card-title text-white text-uppercase mt-3">
            <i className="far fa-calendar-alt"></i> Lịch Sử Giao Dịch
            </h3>
            <div className="row">
              <div className="col-6 text-left text-white">
                Người Đặt :{" "}
                <strong className="text-uppercase">
                  {this.state.userName}
                </strong>
              </div>
              <div className="col-6 text-right text-warning">
                <strong className="text-uppercase">
                  {this.state.isExchanged !== ""
                    ? ""
                    : "Chưa có lịch sử giao dịch"}
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
              <tbody>
                {this.pagination().map((item, index) => {
                  return <ItemHistory key={index} data={item} index={index} />;
                })}
              </tbody>
            </table>
            <div className="container">
              <MyPagination
                nextPage={this.nextPage}
                prePage={this.prePage}
                data={this.state.bookingTour}
                _limit={this._limit}
                currentPage={this.state.currentPage}
              />
            </div>
          </div>
        </div>
      </div>
    ) : (
      <Waiting />
    );
  }
}
const mapStateToProps = (state) => {
  console.log("stateHistoryBooking", state);
  let loggedIn = state.users.loggedIn;
  return { loggedIn };
};

export default connect(mapStateToProps, null)(HistoryBooking);
