import React from "react";

import "./chart-rating.css";

const ChartRating = (props) => {
  const { a, b, c, d, e, sumComment, mediumOfStar } = props.data;
  return (
    <div className="container my-5">
      <h6 className="w-100 text-center show-sum-poin">
        {mediumOfStar.toFixed(2)} Start
      </h6>
      <p className="w-100 text-center">({sumComment} nhận xét)</p>
      <div className="row">
        <div className="col-4 w-100 text-center">1 star</div>
        <div className="col-7 bg-light p-0 warp-full-rating-parent">
          <div
            style={{ width: a + "%" }}
            className=" bg-success m-0 warp-full-rating-childrent "
          ></div>
        </div>
      </div>
      <div className="row">
        <div className="col-4 w-100 text-center">2 star</div>
        <div className="col-7 bg-light p-0 warp-full-rating-parent">
          <div
            style={{ width: b + "%" }}
            className="bg-success m-0 warp-full-rating-childrent "
          ></div>
        </div>
      </div>
      <div className="row">
        <div className="col-4 w-100 text-center">3 star</div>
        <div className="col-7 bg-light p-0 warp-full-rating-parent">
          <div
            style={{ width: c + "%" }}
            className="bg-success m-0 warp-full-rating-childrent "
          ></div>
        </div>
      </div>
      <div className="row">
        <div className="col-4 w-100 text-center">4 star</div>
        <div className="col-7 bg-light p-0 warp-full-rating-parent">
          <div
            style={{ width: d + "%" }}
            className="bg-success m-0 warp-full-rating-childrent "
          ></div>
        </div>
      </div>
      <div className="row">
        <div className="col-4 w-100 text-center">5 star</div>
        <div className="col-7 bg-light p-0 warp-full-rating-parent">
          <div
            style={{ width: e + "%" }}
            className=" bg-success m-0 warp-full-rating-childrent "
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ChartRating;
