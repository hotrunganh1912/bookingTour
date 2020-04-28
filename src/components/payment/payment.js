import React from "react";
import CartAtm from "../../common/cart-atm";

const Payment = (props) => {
  const typeModalPaymet = {
    position: "absolute",
    display: "block",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    // backgroundColor: "#6c757d73",
    backgroundColor: "#000000b8",
    zIndex: 1050,
    transition: "all 0.5s ease 2s",
  };

  // const typeCardPayment = {
  //   position: "absolute",
  //   display: "block",
  //   top: "150px",
  //   right: "25%",
  //   left: "25%",
  //   zIndex: 1050,
  // };

  return (
    <>
      <div onClick={props.handlerCkickShowModal} style={typeModalPaymet}></div>
      <CartAtm valueMoney={200000} />
    </>
  );
};
export default Payment;
