import React from "react";
import pane from "../../../image/lodging.png";

const TourSearch = () => {
  return (
    <div>
      <div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={pane} class="d-block w-100" alt="..." />
          </div>
        </div>
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </div>
      <div class="search-sec">
        <div class="container">
          <form action="#" method="post" novalidate="novalidate">
            <div class="row">
              <div class="col-lg-12">
                <div class="row">
                  <div class="col-lg-3 col-md-3 col-sm-12 p-0">
                    <input
                      type="text"
                      class="form-control search-slt"
                      name="q"
                      placeholder="Bạn Muốn Đi Đâu"
                    />
                  </div>
                  <div class="col-lg-3 col-md-3 col-sm-12 p-0">
                    <input
                      type="text"
                      class="form-control search-slt"
                      placeholder="Thời Gian Đi"
                      name="dateStart"
                    />
                  </div>
                  <div class="col-lg-3 col-md-3 col-sm-12 p-0">
                    <select
                      name="typeTour"
                      class="form-control search-slt"
                      id="exampleFormControlSelect1"
                    >
                      <option value="">Chọn type tour</option>
                      <option value="hot">Tour Hot</option>
                      <option value="discount">Giảm Giá</option>
                      <option value="foreign">Tour Nước Ngoài</option>
                    </select>
                  </div>
                  <div class="col-lg-3 col-md-3 col-sm-12 p-0">
                    <button type="button" class="btn btn-primary wrn-btn">
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TourSearch;
