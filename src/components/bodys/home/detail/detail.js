import React, {Component} from 'react';
import ImageCap from './img';
import './product-detail.css';
import BookingForm from './bookingForm';
import TourDetailHeadLine from './tourDetailHeadLine';

class Detail extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="title-tour col-12 mt-3">
            <h2 className="page-title">
              <b>
                Tour Ninh Bình 1N: Bái Đính - Tràng An - Hang Múa - Buffet Trưa
              </b>
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="row">
              <div className="detail-tour col-md-8 col-12 my-2">
                <div className="row img-overview">
                  <ImageCap />
                  <BookingForm />
                  <TourDetailHeadLine />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Detail;
