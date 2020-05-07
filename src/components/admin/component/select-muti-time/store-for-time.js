import React from "react";
import IteamTime from "./iteam-time";
import { NotificationManager } from "react-notifications";

const StoreForTime = (props) => {
  const getIndexTime = (index) => {
    let newArrayTime = [...props.dataArrayTime];
    newArrayTime.splice(index, 1);
    props.handerUpdateNewTimeStart(newArrayTime);
  };

  const handerAddtime = (e) => {
    if (e.target.value === "") return;
    const newDate = new Date(e.target.value).getTime();
    if (newDate <= Date.now())
      return NotificationManager.warning("không Thể Chọn ngày Trong Quá Khứ");
    if (props.dataArrayTime.indexOf(newDate) === -1) {
      props.handerUpdateNewTimeStart([...props.dataArrayTime, newDate]);
    }
  };

  return (
    <>
      <div className="form-group col-md-6">
        <label htmlFor="price">Chọn Thời Gian Đi</label>
        <input onChange={handerAddtime} className="form-control" type="date" />
      </div>
      <div className="form-group col-md-6">
        <label htmlFor="price">Thời Gian Đã Chọn</label>
        <span
          style={{ height: "unset", minHeight: " calc(1.5em + .75rem + 2px)" }}
          className="form-control"
        >
          {props.dataArrayTime.length > 0 &&
            props.dataArrayTime.map((e, i) => (
              <IteamTime
                key={"time" + i}
                time={e}
                index={i}
                getIndexTime={getIndexTime}
              />
            ))}
        </span>
      </div>
    </>
  );
};

export default StoreForTime;
