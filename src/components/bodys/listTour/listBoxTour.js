import React, { Component } from "react";
import "./listTour.css";
import BgListTour from "./bgListTour";

class ListBoxTour extends Component {
  render() {
    return (
      <BgListTour titleName={this.props.titleName} styleTour={this.props.styleTour} />
    );
  }
}

export default ListBoxTour;
