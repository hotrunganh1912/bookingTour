import React, {Component} from 'react';

class ImageCap extends Component {
  render() {
    return (
      <div className="w-100">
        <div className="img-capital">
            <img src="https://q-cf.bstatic.com/images/hotel/max1024x768/190/190495348.jpg" />
        </div>
        <div className="col-12 info-journeys">
          <span className="time-join">
            <i className="far fa-clock"></i>1 Ngày
          </span>
          <span className="transit">
            <i className="fas fa-plane"></i>
            Máy bay
          </span>
          <span className="tour-code">
            Mã Tour:
            <b className="text-primary">T01012</b>
          </span>
        </div>
      </div>
    );
  }
}

export default ImageCap;
