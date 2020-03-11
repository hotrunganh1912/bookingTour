import React, {Component} from 'react';

class BookingForm extends Component {
  render() {
    return (
      <div className="col-12 desktop-booking-form">
        <div className="booking-form">
          <div className="d-flex pt-4 pr-2">
            <span className="col-8">Chọn ngày khởi hành</span>
            <span
              readOnly
              className="form-control col-4 btn date-input"
              value="10-03-2020"
            >
              <span className="DateCheckinText">04-03-2020</span>
            </span>
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
