import React from "react";
import IteamTime from "./iteam-time";
import { NotificationManager } from "react-notifications";

const StoreForTime = (props) => {
  const { messError } = props;
  const getIndexTime = (index) => {
    let newArrayTime = [...props.dataArrayTime];
    newArrayTime.splice(index, 1);
    props.handerUpdateNewTimeStart(newArrayTime);
  };

  const handerAddtime = (e) => {
    if (e.target.value === "") return;
    const newDate = new Date(e.target.value).getTime();
    if (newDate <= Date.now())
      return NotificationManager.error("không Thể Chọn ngày này");
    if (props.dataArrayTime.indexOf(newDate) === -1) {
      props.handerUpdateNewTimeStart([...props.dataArrayTime, newDate]);
    } else NotificationManager.warning("Ngày Đã Tồn  Tại");
    // props.handerUpdateNewTimeStart(e.target.value);
  };

  return (
    <>
      <div className="form-group col-md-6">
        <label htmlFor="timeStart">Chọn Thời Gian Đi</label>{" "}
        <label style={{ display: "inline" }} className="invalid-feedback">
          {messError["timeStart"]}
        </label>
        {props.dataArrayTime.length > 0 ? (
          <span
            style={{
              height: "unset",
              minHeight: " calc(1.5em + .75rem + 2px)",
            }}
            className="form-control p-0 border-0"
            id="timeStart"
          >
            {props.dataArrayTime.map((e, i) => (
              <IteamTime
                key={"time" + i}
                time={e}
                index={i}
                getIndexTime={getIndexTime}
              />
            ))}
          </span>
        ) : (
          ""
        )}
        <input onChange={handerAddtime} className="form-control" type="date" />
      </div>
    </>
  );
};

export default StoreForTime;
