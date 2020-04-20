import React, { useRef } from "react";
import pane from "../../../image/lodging.png";
import { connect } from "react-redux";
import { setDataSearch } from "../../../action/search";

const TourSearch = (props) => {
  const inputSearch = useRef("");
  const selectType = useRef("");
  const dateStart = useRef("");

  const handleForcus = (e) => {
    e.target.type = "date";
  };

  const handleUnforcus = (e) => {
    if (e.target.value === "") {
      e.target.type = "text";
    } else {
      e.target.type = "date";
    }
  };

  const getDataAndDispatch = () => {
    let date =
      dateStart.current.value === ""
        ? ""
        : new Date(dateStart.current.value).getTime();
    let data = {
      q: inputSearch.current.value,
      typeTour: selectType.current.value,
      dateStart: date,
    };
    props.getDataSearch(data);
  };

  return (
    <div>
      <div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={pane} className="d-block w-100" alt="..." />
          </div>
        </div>
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </div>
      <div className="search-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                  <input
                    ref={inputSearch}
                    type="text"
                    className="form-control search-slt"
                    name="q"
                    placeholder="Bạn Muốn Đi Đâu"
                  />
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                  <input
                    ref={dateStart}
                    type="text"
                    className="form-control search-slt"
                    placeholder="Thời Gian Đi"
                    name="dateStart"
                    onFocus={handleForcus}
                    onBlur={handleUnforcus}
                  />
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                  <select
                    ref={selectType}
                    name="typeTour"
                    className="form-control search-slt"
                    id="exampleFormControlSelect1"
                  >
                    <option value="">Chọn type tour</option>
                    <option value="hot">Tour Hot</option>
                    <option value="discount">Giảm Giá</option>
                    <option value="foreign">Tour Nước Ngoài</option>
                  </select>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                  <button
                    onClick={getDataAndDispatch}
                    type="button"
                    className="btn btn-primary wrn-btn"
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    getDataSearch: (data) => dispatch(setDataSearch(data)),
  };
};

export default connect(null, mapDispatchToProps)(TourSearch);
