import React from "react";

const btnHiden = {
  position: "fixed",
  left: "180px",
  top: 0,

  transition: "0.8s all",
  transform: `translate(37px, 0)`,
  zIndex: 4
};
const btnShow = {
  position: "fixed",
  left: "0",
  top: 0,

  transition: "0.8s all",
};

const BtnClickShowMenu = (props) => {
  let { isShowMenu, handerClickShowOffMenu } = props;
  return (
    <label
      style={isShowMenu ? btnHiden : btnShow}
      onClick={handerClickShowOffMenu}
      className="btn float-right"
    >
      {isShowMenu ? (
        <i className="fa fa-times icon-torate-hover" aria-hidden="true"></i>
      ) : (
        <i className="fa fa-bars icon-torate-hover" aria-hidden="true"></i>
      )}
    </label>
  );
};

export default BtnClickShowMenu;
