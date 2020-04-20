import React from "react";
import FormSearch from "./formSearch";

class BgSearchBox extends React.Component {
  render() {
    return (
      <div className="container bg-light  p-0 ">
        <div className="w-100 image-bg warp-box mx-0">
          <div className="black-warp"></div>
          {/* <h1>Find</h1> */}
          <div className="m-auto box-search">
            {/* box-search  */}
            <FormSearch {...this.props} />
            {/* end box-search  */}
          </div>
        </div>
      </div>
    );
  }
}

export default BgSearchBox;
