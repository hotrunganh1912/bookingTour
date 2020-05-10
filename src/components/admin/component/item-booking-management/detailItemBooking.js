import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import callApi from '../../../../common/callAPI';
import ItemDetailBooking from './itemDetailBooking';
import MyPagination from '../../../../common/my-pagination';

class DetailItemBooking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detailData: [],
      userName: "",
      indexDataRender: 0,
      currentPage: 1,
    };
    this._limit = 6;
  }
  componentDidMount() {
    console.log('this.props.match.params.id :>> ', this.props.match.params.id);
    const userID = this.props.match.params.id;
    callApi(`Users/${userID}`, "GET", null).then((res) => {
        if (res && res.status === 200) {
          this.setState({
            userName: res.data.usersName,
          });
        } else this.setState({});
      });
      callApi(`bookings_tour?userID=${userID}`, "GET", null).then((res) => {
        if (res && res.status === 200) {
          this.setState({
            detailData: res.data,
          });
          console.log("stateHistory", this.state);
        } else this.setState({});
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
    if (this.state.detailData.length <= 0) return;
    let end =
      this.state.indexDataRender + this._limit >= this.state.detailData.length
        ? this.state.detailData.length
        : this.state.indexDataRender + this._limit;

    if (this.state.detailData.length === 1)
      return this.state.detailData;
    for (let i = this.state.indexDataRender; i < end; i++) {
      datanew.push(this.state.detailData[i]);
    }
    return datanew;
  };
  render() {
      const { detailData } = this.state;
      let itemDetailBooked = this.pagination()&&this.pagination().map((item, index) => {
          return <ItemDetailBooking key={index} data={item} index={index} />
      });
    return (
      <div className="container">
        <div className="card card-primary mt-3 text-center">
          <div className="card-header bg-info">
            <h3 className="card-title text-white text-uppercase mt-3">
              <i className="far fa-calendar-alt"></i> Lịch Sử giao Dịch
            </h3>
            <div className="row">
              <div className="col-6 text-left text-white">
                Người Đặt :{' '}
                <strong className="text-uppercase">
                  {this.state.userName}
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
                  <th>Thời Gian Đi</th>
                  <th>Trạng Thái</th>
                  <th>Chi Tiết</th>
                </tr>
              </thead>
              <tbody>
                  {itemDetailBooked}
              </tbody>
            </table>
            <div className="container">
              <MyPagination
                nextPage={this.nextPage}
                prePage={this.prePage}
                data={this.state.detailData}
                _limit={this._limit}
                currentPage={this.state.currentPage}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(DetailItemBooking);
