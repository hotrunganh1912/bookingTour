import React, { useState, useEffect } from "react";
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

  const [data, setData] = useState(0);
  const [rsNull, setRsNull] = useState(false);

  console.log("rsNull :", rsNull);

  const pullData = async () => {
    setRsNull(false);
    setData(0);
    await callApi(
      `tours?${q === "" ? "" : "q=" + handerDatataSearch(q)}${
        typeTour === "" ? "" : "&&style=" + typeTour
      }`,
      "Get",
      null
    ).then((res) => {
      if (res.data.lenght > 0) setData(res.data);
      else setRsNull(true);
      console.log("res !== [] :", res.data.lenght > 0);
    });
  };

  useEffect(() => {
    pullData();
  }, [q, typeTour, dateStart]);

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
      {/* {console.log("data ", data)} */}
      {data && data !== 0 ? (
        <BosxRsSearch data={data} />
      ) : rsNull ? (
        <div>Không tìm thấy kết quả...</div>
      ) : (
        <div>pending...</div>
      )}
    </div>
  );
};

const mapStateToProps = (data) => {
  return {
    data,
  };
};

export default connect(mapStateToProps)(BgTour);
