import React, { Component } from "react";
import ImageCap from "./img";
import "./product-detail.css";
import BookingForm from "./bookingForm";
import TourDetailHeadLine from "./tourDetailHeadLine";
import callApi from "../../../../common/callAPI";

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataTour: "",
      spaceTop: 175
    };
  }

  componentDidMount() {
    callApi(`tours/?id=${this.props.match.params.id}`, "Get", null).then(
      res => {
        this.setState({
          dataTour: res.data
        });
      }
    );
    window.addEventListener("scroll", this.handerScrollAtBooking);
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }

  handerScrollAtBooking = () => {
    const isTop = window.scrollY >= 0 && window.scrollY < 106;
    const top = document.querySelector(".offSetTopFromBooking").offsetTop;
    isTop
      ? this.setState({ spaceTop: top - window.scrollY + 3 })
      : this.setState({ spaceTop: 78 });
  };

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handerScrollAtBooking);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="title-tour col-12 mt-3">
            <h2 className="page-title col-lg-8 text-center">
              <b>
                {this.state.dataTour[0] &&
                  `${this.state.dataTour[0].city} - ${this.state.dataTour[0].country} - ${this.state.dataTour[0].timeJoin}`}
              </b>
            </h2>
          </div>
        </div>
        <div className="row  offSetTopFromBooking">
          <div className="col-12">
            <div className="row">
              <div className="detail-tour col-lg-8 col-12 my-2">
                <div className="row img-overview">
                  <ImageCap
                    dataTour={this.state.dataTour[0] && this.state.dataTour[0]}
                    {...this.props}
                  />
                  <BookingForm
                    dataTour={this.state.dataTour[0] && this.state.dataTour[0]}
                    spaceTop={this.state.spaceTop}
                    {...this.props}
                  />
                  <TourDetailHeadLine {...this.props} />
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
