import React from "react";

const IteamTime = (props) => {
  const { time, index } = props;
  return (
    <span
      className="rounded my-2"
      style={
        time <= Date.now()
          ? {
              border: "1px solid red",
              padding: "0.3rem",
              display: "inline-block",
              margin: "0.3rem",
            }
          : {
              border: "1px solid rgba(0, 123, 255, 0.64)",
              padding: "0.3rem",
              display: "inline-block",
              margin: "0.3rem",
            }
      }
    >
      {new Date(time).toLocaleDateString("en-GB")}{" "}
      <i
        onClick={(e) => {
          props.getIndexTime(e.target.dataset.index);
        }}
        data-index={index}
        className="fa fa fa-times icon-torate-hover"
      ></i>
    </span>
  );
};

export default IteamTime;
