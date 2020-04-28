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
    backgroundColor: "#6c757d73",
    zIndex: 99999,
  };

  const typeCardPayment = {
    position: "absolute",
    display: "block",
    top: "150px",
    right: "25%",
    left: "25%",
    zIndex: 99999,
  };

  return (
    <div style={typeModalPaymet}>
      <div style={typeCardPayment} className="">
        <CartAtm />
      </div>
    </div>
  );
};
export default Payment;
