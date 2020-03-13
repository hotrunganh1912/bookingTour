import React, { Component } from "react";
import { Link } from "react-router-dom";

class FormBoxTour extends Component {
  render() {
    let { image, city, country, timeJoin, price, calendar, transit } = this.props.data
    return (
      <div className="w-100 box-list-tour-warp">
        <div className="box-element-tour ">
          <div className="image-list-e-w">
            <img
              className="image-list-e rounded"
              //   src={require("../../../image/lodging.png")}
              src={image}
              alt="of-tour"
            />
          </div>

          <div className="list-tour-e-warp"></div>

          <div className="list-e-content rounded">
            <div className="content-infor-warp">
              <div className="content-infor text-center my-0">
                <h2>{city}</h2>
                <i className="fas fa-globe-africa"></i>
                <h5 className="text-danger">{country}</h5>
              </div>
              <div className="content-infor">
                <i className="far fa-clock"></i> {timeJoin}
              </div>
              <div className="content-infor">
                <i className="fa fa-dollar-sign" aria-hidden="true"></i>
                {price}
              </div>
              <div className="content-infor">
                <i className="far fa-calendar-alt"></i> {calendar}
              </div>
              <div className="content-infor">
                <i className="fas fa-plane"></i> {transit.join(", ")}
              </div>
              <div className="content-infor text-right">
                {/* <a href="#"> Chi Tiết...</a> */}
                <Link to="/detail">
                  Chi tiết...
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FormBoxTour;
