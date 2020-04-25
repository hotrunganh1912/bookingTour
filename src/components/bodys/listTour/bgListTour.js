import React, { Component } from "react";
import callApi from "../../../common/callAPI";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { setDataSearch } from "../../../action/search";
import Waiting from "../../../common/waiting";
import Slider from "../../../common/slider/slider";

class BgListTour extends Component {
  constructor() {
    super();
    this.state = {
      tours: [],
      isUnmounting: false,
    };
  }

  // get  data
  componentDidMount() {
    this.setState({ isUnmounting: false });

    callApi(
      `tours?style=${this.props.styleTour}&_limit=${this.props.limit}`,
      "Get",
      null
    ).then((res) => {
      if (res && res.data && !this.state.isUnmounting)
        this.setState({ tours: res.data });
    });
    // callApi(`tours`, "Get", null).then((res) => {
    //   if (res && res.data && !this.state.isUnmounting)
    //     this.setState({ tours: res.data });
    // });
  }

  componentWillUnmount() {
    this.setState({ isUnmounting: true });
  }

  getDataAndDispatch = () => {
    let data = {
      q: "",
      typeTour: this.props.styleTour,
      dateStart: "",
    };
    this.props.getDataSearch(data);

    return this.props.history.push("/tour");
  };

  render() {
    let datas = this.state.tours;
    return (
      <div className=" container px-0 my-5 p-2">
        <div className="d-flex  justify-content-between title-and-seeMove">
          <h5 className="bg-danger p-2 pb-3 rounded text-white">
            {this.props.titleName}
          </h5>
          <Link
            className="text-right"
            to={"#"}
            onClick={this.getDataAndDispatch}
            tabIndex="NULL"
          >
            Xem Thêm ...
          </Link>
        </div>
        <div>
          {datas && datas.length > 0 ? <Slider data={datas} /> : <Waiting />}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getDataSearch: (data) => dispatch(setDataSearch(data)),
  };
};

export default connect(null, mapDispatchToProps)(withRouter(BgListTour));
