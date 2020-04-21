import React, { useState, useEffect } from "react";
import TourSearch from "./tourSearch";
import BosxRsSearch from "./boxRsSearch";
import "./tourSearch.css";
import callApi from "../../../common/callAPI";
import { connect } from "react-redux";
import { removeAccents } from "../../../common/funcCommon";
import Waiting from "../../../common/waiting";
import NotFindData from "../../../common/notFindata";
import CheckConnect from "../../../common/checkConnect";

const BgTour = (props) => {
  console.log("props :", props);

  const q = props.data.search.q;
  const typeTour = props.data.search.typeTour;
  const dateStart = props.data.search.dateStart;

  const [countFail, setCountFail] = useState(0);
  const [data, setData] = useState(0);

  const [rsGetData, setRsGetData] = useState("pending");

  useEffect(() => {
    let isUnmounting = false;

    const checkDateStart = (tours) => {
      return tours.filter((tour) => {
        for (let i = 0; i < tour.timeStart.length; i++) {
          console.log(
            `${tour.city} tour.timeStart[i] >= dateStart`,
            tour.timeStart[i] >= dateStart
          );
          if (tour.timeStart[i] >= dateStart) return true;
        }
        return false;
      });
    };

    const pullData = async () => {
      setRsGetData("pending");
      setData(0);
      await callApi(
        `tours?${q === "" ? "" : "q=" + handerDatataSearch(q)}${
          typeTour === "" ? "" : "&&style=" + typeTour
        }`,
        "Get",
        null
      ).then((res) => {
        if (res) {
          if (res.data.length > 0) {
            if (!isUnmounting) {
              const filterData =
                dateStart !== "" ? checkDateStart(res.data) : res.data;
              if (filterData && filterData.length > 0) {
                console.log("filterData :", filterData);
                setData(filterData);
                setRsGetData("getFinish");
              } else setRsGetData("null");
            }
          } else setRsGetData("null");
        } else {
          setRsGetData("connectError");
        }
      });
    };

    pullData();

    return () => {
      isUnmounting = true;
    };
  }, [q, typeTour, dateStart, countFail]);

  const wasGetDataFail = () => {
    console.log("set ");
    setCountFail(countFail + 1);
  };

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
      <TourSearch
        statusGetData={rsGetData}
        wasGetDataFail={wasGetDataFail}
        q={q}
        typeTour={typeTour}
        dateStart={dateStart}
      />
      {rsGetData === "pending" && (
        <Waiting custome={{ position: "relative", top: "-90px" }} />
      )}
      {rsGetData === "getFinish" && (
        <div
          style={{
            position: "relative",
            top: "-113px",
          }}
          className="mover-list bg-light flex-wrap flex-grow p-3 rounded d-flex list-all-e-tour justify-content-center"
        >
          <BosxRsSearch data={data} />
        </div>
      )}
      {rsGetData === "null" && (
        <NotFindData custome={{ position: "relative", top: "-90px" }} />
      )}
      {rsGetData === "connectError" && (
        <CheckConnect custome={{ position: "relative", top: "-90px" }} />
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
