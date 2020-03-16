import React, {Component} from 'react';

class BookingForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countAdult: 1,
      countChilren: 0,
      priceAdult: 1360000,
      priceChilren: 1240000
      
    }
    this.total = this.state.countAdult*this.state.priceAdult+this.state.countChilren*this.state.priceChilren;
  }

  increaseAdult = () => {
    let { countAdult, countChilren, priceAdult, priceChilren } = this.state;
    countAdult++;
    this.sumMoney(countAdult, countChilren, priceAdult, priceChilren);
    this.setState({countAdult});
  }

  decreaseAdult = () => {
    let { countAdult, countChilren, priceAdult, priceChilren } = this.state;
    countAdult--;
    if (countAdult < 1) {
      return false;
    } else {
      this.sumMoney(countAdult, countChilren, priceAdult, priceChilren);
      this.setState({countAdult});
    }
  }

  increaseChilren = () => {
    let { countAdult, countChilren, priceAdult, priceChilren } = this.state;
    countChilren++;
    this.sumMoney(countAdult, countChilren, priceAdult, priceChilren);
    this.setState({countChilren});
  }

  decreaseChilren = () => {
    let { countAdult, countChilren, priceAdult, priceChilren } = this.state;
    countChilren--;
    if (countChilren < 0) {
      return false;
    } else {
      this.sumMoney(countAdult, countChilren, priceAdult, priceChilren);
      this.setState({countChilren});
    }
  }

  sumMoney = (countAdult, countChilren, priceAdult, priceChilren) => {
    // let { countAdult, countChilren, priceAdult, priceChilren } = this.state;
    console.log(countAdult, countChilren, priceAdult, priceChilren);
    this.total = countAdult*priceAdult + countChilren*priceChilren;
    // this.setState({total});
  }

  formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
  }
  render() {
    let { countAdult, countChilren, priceAdult, priceChilren } = this.state;
    return (
      <div className="col-12 desktop-booking-form">
        <div className="booking-form">
          <div className="d-flex pt-4 pr-2">
            <span className="col-7">Chọn ngày khởi hành</span>
            <input
              type="date"
              className="form-control col-5 btn date-input"
            />
          </div>

          <div className="d-flex pt-4 pr-2">
            <span className="number-detail col-1">{ countAdult }</span>
            <span className="text-detail col-3">
              <span className="width-50">Người lớn</span>
            </span>
            <span className="price-color col-5 text-warning">x { this.formatNumber(priceAdult) }</span>
            <div className="btn-group col-3 minus-plus">
              <button 
                type="button" 
                className="btn minus-adult btn-general"
                onClick={ this.decreaseAdult }>
                <i className="fas fa-minus"/>
              </button>
              <button 
                type="button" 
                className="btn plus-adult btn-general"
                onClick={ this.increaseAdult }>
                <i className="fas fa-plus"></i>
              </button>
            </div>
          </div>

          <div className="d-flex pt-4 pr-2">
            <span className="number-detail col-1">{ countChilren }</span>
            <span className="text-detail col-3">
              <span className="width-50">Trẻ em</span>
            </span>
            <span className="price-color col-5 text-warning">x { this.formatNumber(priceChilren) }</span>
            <div className="col-3 btn-group minus-plus">
              <button 
                type="button" 
                className="btn minus-adult btn-general"
                onClick={ this.decreaseChilren }>
                <i className="fas fa-minus"></i>
              </button>
              <button 
                type="button" 
                className="btn plus-adult btn-general"
                onClick={ this.increaseChilren }>
                <i className="fas fa-plus"></i>
              </button>
            </div>
          </div>

          <div className="d-flex pt-4">
            <span className="labelPrice col-7">Tổng cộng:</span>
            <span className="totalPrice col-5 text-warning">
              { this.formatNumber(this.total) }
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
