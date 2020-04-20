import React, { ueState, useEffect } from "react";
import TourSearch from "./tourSearch";
import BosxRsSearch from "./boxRsSearch";
import "./tourSearch.css";
import callApi from "../../../common/callAPI";
import { connect } from "react-redux";
import { removeAccents } from "../../../common/funcCommon";

const BgTour = (props) => {
  const q = props.data.search.q;

  const typeTour = props.data.search.typeTour;
  const dateStart = props.data.search.dateStart;
  //   console.log(" q:", q);

  useEffect(() => {
    callApi(`tours?q=${handerDatataSearch(q)}&&style=${typeTour}`).then(
      (res) => {
        console.log("res :", res.data);
      }
    );
  }, [q, typeTour]);

  const checkDateStart = (date) => {};

  const handerDatataSearch = (q) => {
    let char = q
      .toLowerCase()
      .trim()
      .split(" ")
      .filter((x) => x !== "")
      .join("");
    console.log("removeAccents(char); :", removeAccents(char));

    return removeAccents(char);
  };

  return (
    <div className="container">
      <TourSearch />
      <BosxRsSearch />
    </div>
  );
};

const mapStateToProps = (data) => {
  return {
    data,
  };
};

export default connect(mapStateToProps)(BgTour);
