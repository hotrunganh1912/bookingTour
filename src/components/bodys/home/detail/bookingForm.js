import React, { Component } from "react";
import * as funcCommon from "../../../../common/funcCommon";
class BookingForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfTicker: 1,
      numberOfChildrenTicker: 0,
      currentPriceTicker: 0,
      currentPriceChildrenTicker: 0,
      curentSumPrice: 0
    };
  }

  renderTimeData = () => {
    let arrayTime = this.props.dataTour && this.props.dataTour.timeStart;
    let data = null;

    if (arrayTime) {
      data = arrayTime.map((e, i) => {
        return (
          <option key={"option" + i} className="text-center" value={`${e}`}>
            {funcCommon.formatDate(e)}
          </option>
        );
      });
    }

    return data === null ? (
      <span readOnly className="DateCheckinText form-control text-center">
        Chưa Có Lịch
      </span>
    ) : (
      (data = (
        <select className="DateCheckinText form-control text-center">
          {data}
        </select>
      ))
    );
  };

  handerSubtract = async (object = "normal") => {
    let currentNumberOfChildrenTicker = this.state.numberOfChildrenTicker;
    let currentNumberOfTicker = this.state.numberOfTicker;

    object === "children"
      ? currentNumberOfChildrenTicker > 0 &&
        (await this.setState({
          numberOfChildrenTicker: --currentNumberOfChildrenTicker
        }))
      : currentNumberOfTicker > 1 &&
        (await this.setState({ numberOfTicker: --currentNumberOfTicker }));
    this.displayPrice();

    console.log(
      "currentNumberOfTicker,this.state.numberOfTicker :",
      currentNumberOfTicker,
      this.state.numberOfTicker
    );
  };

  handerPlus = async (object = "normal") => {
    let currentNumberOfChildrenTicker = this.state.numberOfChildrenTicker;
    let currentNumberOfTicker = this.state.numberOfTicker;

    object === "children"
      ? currentNumberOfChildrenTicker < 20 &&
        (await this.setState({
          numberOfChildrenTicker: ++currentNumberOfChildrenTicker
        }))
      : currentNumberOfTicker < 20 &&
        (await this.setState({ numberOfTicker: ++currentNumberOfTicker }));
    this.displayPrice();
    console.log("this.state.numberOfTicker :", this.state.numberOfTicker);
  };

  displayPrice = async () => {
    this.props.dataTour.price &&
      (await this.setState({
        currentPriceTicker:
          this.props.dataTour.price * this.state.numberOfTicker
      }));

    this.props.dataTour.price &&
      (await this.setState({
        currentPriceChildrenTicker:
          this.props.dataTour.price * this.state.numberOfChildrenTicker
      }));

    await this.setState({
      curentSumPrice:
        this.state.currentPriceChildrenTicker * 0.75 +
        this.state.currentPriceTicker
    });
  };

  componentDidMount() {
    setTimeout(() => {
      this.displayPrice();
    }, 1000);
  }

  render() {
    return (
      <div className="col-12 desktop-booking-form">
        <div
          style={{ top: `${this.props.spaceTop}px` }}
          className={`booking-form border m-2 rounded`}
        >
          <h3 className=" w-100 text-center m-2">Đặt Vé</h3>
          <div className="d-flex pt-4 pr-2">
            <span className="col-7">Chọn ngày khởi hành</span>
            <span className="col-5  px-0 mx-0">{this.renderTimeData()}</span>
          </div>

          <div className="d-flex pt-4 pr-2">
            <span className="number-detail col-1">
              {this.state.numberOfTicker < 10
                ? `0${this.state.numberOfTicker}`
                : this.state.numberOfTicker}
            </span>
            <span className="text-detail col-3">
              <span className="width-70">Người lớn</span>
            </span>
            <span
              style={{ minWidth: "160px" }}
              className="price-color col-5 text-warning"
            >
              x {funcCommon.formCurencyVN(this.state.currentPriceTicker)}
            </span>
            <div className="btn-group col-3 minus-plus">
              <button
                type="button"
                className="btn minus-adult btn-general border"
                onClick={this.handerSubtract}
              >
                <i className="fas fa-minus" />
              </button>
              <button
                type="button"
                className="btn plus-adult btn-general border"
                onClick={this.handerPlus}
              >
                <i className="fas fa-plus"></i>
              </button>
            </div>
          </div>

          <div className="d-flex pt-4 pr-2">
            <span className="number-detail col-1">
              {this.state.numberOfChildrenTicker < 10
                ? `0${this.state.numberOfChildrenTicker}`
                : this.state.numberOfChildrenTicker}
            </span>
            <span className="text-detail col-3">
              <span className="width-70">Trẻ em</span>
            </span>
            <span className="price-color col-5 text-warning">
              x{" "}
              {funcCommon.priceForChildren(
                this.state.currentPriceChildrenTicker
              )}
            </span>
            <div className="col-3 btn-group minus-plus">
              <button
                type="button"
                className="btn minus-adult btn-general border"
                onClick={() => this.handerSubtract("children")}
                data-for="children"
              >
                <i className="fas fa-minus"></i>
              </button>
              <button
                type="button"
                className="btn plus-adult btn-general border"
                onClick={() => this.handerPlus("children")}
                data-for="children"
              >
                <i className="fas fa-plus"></i>
              </button>
            </div>
          </div>

          <div className="d-flex pt-4">
            <span className="labelPrice col-7">Tổng cộng:</span>
            <span className="totalPrice col-5 text-warning">
              {funcCommon.formCurencyVN(this.state.curentSumPrice)}
              <span className="tourItemCurrency">VNĐ</span>
            </span>
          </div>

          <div className="d-flex py-4">
            <div className="col-12">
              <button type="button" className="btn btn-warning col-12">
                Yêu cầu thanh toán
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BookingForm;
