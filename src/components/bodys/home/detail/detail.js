import React, { Component, memo } from "react";
import ImageCap from "./img";
import "./product-detail.css";
import BookingForm from "./bookingForm";
import TourDetailHeadLine from "./tourDetailHeadLine";
import callApi from "../../../../common/callAPI";
import Waiting from "../../../../common/waiting";
import CheckConnect from "../../../../common/checkConnect";
import BgComment from "../../../../common/comment/bg-comment";
import NotFound from "../notFound/404NotFound";

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataTour: "",
      spaceTop: 175,
    };
  }

  async componentDidMount() {
    await callApi(`tours/?id=${this.props.match.params.id}`, "Get", null).then(
      (res) => {
        if (res && res.data)
          this.setState({
            dataTour: res.data,
          });
        else
          this.setState({
            dataTour: "0",
          });
      }
    );
    window.addEventListener("scroll", this.handerScrollAtBooking);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
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
    return this.state.dataTour.length === 0 &&
      this.state.dataTour !== "" &&
      this.state.dataTour !== "0" ? (
      <NotFound />
    ) : this.state.dataTour &&
      this.state.dataTour !== "0" &&
      this.state.dataTour !== "" ? (
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
              <div className="detail-tour col-lg-7 col-xl-8 col-12 pb-3 mb-2 border">
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
                <BgComment />
              </div>
            </div>
          </div>
        </div>
      </div>
    ) : this.state.dataTour === "" ? (
      <div className="container">
        <Waiting />
      </div>
    ) : (
      <div className="container">
        <CheckConnect />
      </div>
    );
  }
}

export default memo(Detail);
