import React, { Component } from "react";
import * as funcCommon from "../../../../common/funcCommon";
class BookingForm extends Component {
  constructor(props) {
    super(props);
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
            <span className="col-8">Chọn ngày khởi hành</span>
            <select className="DateCheckinText form-control">
              <option value="1616716800000">
                {funcCommon.formatDate(1616716800000)}
              </option>
              <option value="1616716800000">
                {funcCommon.formatDate(1616716800000)}
              </option>
            </select>
            {/* <span
              readOnly
              className="form-control col-4 btn date-input"
              value="10-03-2020"
            > */}
            {/* <span className="">04-03-2020</span> */}
            {/* </span> */}
          </div>

          <div className="d-flex pt-4 pr-2">
            <span className="number-detail col-1">1</span>
            <span className="text-detail col-3">
              <span className="width-70">Người lớn</span>
            </span>
            <span className="price-color col-5 text-warning">x 1.360.000</span>
            <div className="btn-group col-3 minus-plus">
              <button type="button" className="btn minus-adult btn-general">
                <i className="fas fa-minus"></i>
              </button>
              <button type="button" className="btn plus-adult btn-general">
                <i className="fas fa-plus"></i>
              </button>
            </div>
          </div>

          <div className="d-flex pt-4 pr-2">
            <span className="number-detail col-1">1</span>
            <span className="text-detail col-3">
              <span className="width-70">Trẻ em</span>
            </span>
            <span className="price-color col-5 text-warning">x 1.360.000</span>
            <div className="col-3 btn-group minus-plus">
              <button type="button" className="btn minus-adult btn-general">
                <i className="fas fa-minus"></i>
              </button>
              <button type="button" className="btn plus-adult btn-general">
                <i className="fas fa-plus"></i>
              </button>
            </div>
          </div>

          <div className="d-flex pt-4">
            <span className="labelPrice col-7">Tổng cộng:</span>
            <span className="totalPrice col-5 text-warning">
              2.720.000
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
