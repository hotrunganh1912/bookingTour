import React, { Component } from "react";
import FormBoxTour from "./formBoxTour";
import callApi from "../../../common/callAPI";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { setDataSearch } from "../../../action/search";
import Waiting from "../../../common/waiting";

class BgListTour extends Component {
  constructor() {
    super();
    this.state = {
      tours: [],
    };
  }

  // get  data
  componentDidMount() {
    callApi(`tours?style=${this.props.styleTour}&&_limit=3`, "Get", null).then(
      (res) => {
        if (res) this.setState({ tours: res.data });
      }
    );
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
      // list tour
      <div className=" container px-0 my-5 p-2">
        <div className="d-flex  justify-content-between title-and-seeMove">
          <h5 className="bg-danger p-2 rounded text-white">
            {this.props.titleName}
          </h5>
          <Link
            className="text-right"
            to={"#"}
            onClick={this.getDataAndDispatch}
            tabindex="NULL"
          >
            Xem Thêm ...
          </Link>
        </div>
        <div className="mover-list bg-light p-3 justify-content-between rounded d-flex list-all-e-tour">
          {/* display  box  */}
          {datas && datas.length > 0 ? (
            datas.map((data, i) => {
              return <FormBoxTour key={"FormBoxTour" + i} data={data} />;
            })
          ) : (
            <Waiting />
          )}
          {/* end display  box  */}
        </div>
      </div>
      // end list tour
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getDataSearch: (data) => dispatch(setDataSearch(data)),
  };
};

export default connect(null, mapDispatchToProps)(withRouter(BgListTour));
