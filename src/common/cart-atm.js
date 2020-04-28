import React, { useState } from "react";
import { useEffect } from "react";

const CartAtm = () => {
  const [showCart, setstasetShowCartte] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setstasetShowCartte(true);
    }, 300);
  });

  const CartFront = {
    position: "absolute",
    backgroundColor: "#498ee4",
    width: "390px",
    height: " 250px",
    borderRadius: "6px",
    padding: " 20px 30px 0",
    boxSizing: "border-box",
    fontSize: "10px",
    letterSpacing: "1px",
    fontWeight: 300,
    color: "white",
  };

  //   const imgCartConaiter = {
  //     position: "absolute",
  //     right: 0,
  //     width: "284px",
  //     height: "214px",
  //     top: "36px",
  //     backgroundColor: "#000",
  //     zIndex: -1,
  //     borderRadius: "8px",
  //     boxShadow: " 3px 3px 0 rgba(0, 0, 0, 0.1)",
  //     mozBoxShadow: "3px 3px 0 rgba(0, 0, 0, 0.1)",
  //     webkitBoxShadow: "3px 3px 0 rgba(0, 0, 0, 0.1)",
  //   };

  const imgCartConaiter = {
    width: " 100%",
    position: "relative",
    height: "55px",
    marginBottom: "5px",
    lineHeight: "55px",
  };

  const inputCartNumber = {
    border: "none",
    outline: "none",
    backgroundColor: "#5a9def",
    height: "30px",
    lineHeight: "30px",
    padding: " 0 10px",
    margin: "0 0 25px",
    color: "white",
    fontSize: "10px",
    boxSizing: " border-box",
    borderRadius: "4px",
    fontFamily: "lato, 'helvetica-light', 'sans-serif'",
    letterSpacing: ".7px",
  };

  const cardholderContainer = {
    width: "60%",
    display: "inline-block",
  };

  const expContainer = {
    marginLeft: "10px",
    width: "32%",
    display: "inline-block",
    float: "right",
  };

  const CartBack = {
    right: 0,
    zIndex: -2,
    top: "40px",
  };
  const ContainerCarWarp = {
    transition: " all 0.5s",
    margin: "auto",
    width: "500px",
    height: "290px",
    position: "relative",
  };

  const CartStripe = {
    width: "100%",
    height: "55px",
    backgroundColor: "#3d5266",
    position: "absolute",
    right: 0,
  };

  const CartBtn = {
    backgroundColor: "rgb(251, 251, 251)",
    color: "#ffb242",
    position: "absolute",
    bottom: "-55px",
    right: 0,
    width: " 150px",
    borderRadius: "8px",
    height: " 42px",
    fontSize: "12px",
    fontFamily: "lato, 'helvetica-light', 'sans-serif'",
    textTransform: "uppercase",
    letterSpacing: "1px",
    fontWeight: 400,
    outline: "none",
    border: "none",
    cursor: "pointer",
  };

  const shaDowCard = {
    position: "absolute",
    right: 0,
    width: "284px",
    height: " 214px",
    top: "36px",
    backgroundColor: "#000",
    zIndex: -1,
    borderRadius: "8px",
    boxShadow: "3px 3px 0 rgba(0, 0, 0, 0.1)",
    "-moz-box-shadow": "3px 3px 0 rgba(0, 0, 0, 0.1)",
    "-webkit-box-shadow": "3px 3px 0 rgba(0, 0, 0, 0.1)",
  };

  return (
    <div
      style={
        showCart
          ? { ...ContainerCarWarp }
          : { ...ContainerCarWarp, transform: " translate(0, -999px)" }
      }
    >
      <div style={{ ...CartFront }} className="mx-auto">
        <div style={shaDowCard}></div>
        <div style={imgCartConaiter}>
          <span style={{ fontSize: "12px" }}>
            paying<strong style={{ fontSize: "14px" }}> 99$</strong>
          </span>
          <span style={{ float: "right" }}>
            <img
              alt="img"
              style={{ height: "55px" }}
              src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgZGF0YS1uYW1lPSJMYXllciAxIiBpZD0iTGF5ZXJfMSIgdmlld0JveD0iMCAwIDYwIDYwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZGVmcz48c3R5bGU+LmNscy0xLC5jbHMtMTAsLmNscy0xMSwuY2xzLTIsLmNscy02LC5jbHMtN3tmaWxsOm5vbmU7fS5jbHMtMXtjbGlwLXJ1bGU6ZXZlbm9kZDt9LmNscy0yLC5jbHMtNXtmaWxsLXJ1bGU6ZXZlbm9kZDt9LmNscy0ze2NsaXAtcGF0aDp1cmwoI2NsaXAtcGF0aCk7fS5jbHMtNHtjbGlwLXBhdGg6dXJsKCNjbGlwLXBhdGgtMik7fS5jbHMtNXtmaWxsOiNmZTg2NTc7fS5jbHMtMTAsLmNscy0xMSwuY2xzLTZ7c3Ryb2tlOiNmZTg2NTc7fS5jbHMtMTAsLmNscy02e3N0cm9rZS1saW5lY2FwOnJvdW5kO30uY2xzLTEwLC5jbHMtMTEsLmNscy02LC5jbHMtN3tzdHJva2UtbGluZWpvaW46cm91bmQ7fS5jbHMtNntzdHJva2Utd2lkdGg6NHB4O30uY2xzLTd7c3Ryb2tlOiNlMDZjM2U7fS5jbHMtMTEsLmNscy03e3N0cm9rZS1saW5lY2FwOnNxdWFyZTt9LmNscy0xMCwuY2xzLTExLC5jbHMtN3tzdHJva2Utd2lkdGg6MnB4O30uY2xzLTh7Y2xpcC1wYXRoOnVybCgjY2xpcC1wYXRoLTQpO30uY2xzLTl7ZmlsbDojZmZkYzgyO308L3N0eWxlPjxjbGlwUGF0aCBpZD0iY2xpcC1wYXRoIj48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xLDQ2VjE4YTUsNSwwLDAsMSw1LTVINTRhNSw1LDAsMCwxLDUsNVY0NmE1LDUsMCwwLDEtNSw1SDZBNSw1LDAsMCwxLDEsNDZabTIsMGEzLDMsMCwwLDAsMywzSDU0YTMsMywwLDAsMCwzLTNWMThhMywzLDAsMCwwLTMtM0g2YTMsMywwLDAsMC0zLDNWNDZaTS0xOSw3MUg3OVYtN0gtMTlWNzFaIi8+PC9jbGlwUGF0aD48Y2xpcFBhdGggaWQ9ImNsaXAtcGF0aC0yIj48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0yLDQ2YTQsNCwwLDAsMCw0LDRINTRhNCw0LDAsMCwwLDQtNFYxOGE0LDQsMCwwLDAtNC00SDZhNCw0LDAsMCwwLTQsNFY0NloiLz48L2NsaXBQYXRoPjxjbGlwUGF0aCBpZD0iY2xpcC1wYXRoLTQiPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTksMjlhMiwyLDAsMCwwLDIsMkgyMmEyLDIsMCwwLDAsMi0yVjIzYTIsMiwwLDAsMC0yLTJIMTFhMiwyLDAsMCwwLTIsMnY2WiIvPjwvY2xpcFBhdGg+PC9kZWZzPjx0aXRsZS8+PGcgY2xhc3M9ImNscy0zIj48ZyBjbGFzcz0iY2xzLTQiPjxwYXRoIGNsYXNzPSJjbHMtNSIgZD0iTTIsNDZhNCw0LDAsMCwwLDQsNEg1NGE0LDQsMCwwLDAsNC00VjE4YTQsNCwwLDAsMC00LTRINmE0LDQsMCwwLDAtNCw0VjQ2WiIvPjwvZz48L2c+PGcgY2xhc3M9ImNscy00Ij48cGF0aCBjbGFzcz0iY2xzLTYiIGQ9Ik0yLDQ2YTQsNCwwLDAsMCw0LDRINTRhNCw0LDAsMCwwLDQtNFYxOGE0LDQsMCwwLDAtNC00SDZhNCw0LDAsMCwwLTQsNFY0NloiLz48L2c+PGxpbmUgY2xhc3M9ImNscy03IiB4MT0iOSIgeDI9IjI4IiB5MT0iMzkiIHkyPSIzOSIvPjxsaW5lIGNsYXNzPSJjbHMtNyIgeDE9IjMyIiB4Mj0iNTEiIHkxPSIzOSIgeTI9IjM5Ii8+PGcgY2xhc3M9ImNscy04Ij48cmVjdCBjbGFzcz0iY2xzLTkiIGhlaWdodD0iMjAiIHdpZHRoPSIyNSIgeD0iNCIgeT0iMTYiLz48L2c+PHBhdGggY2xhc3M9ImNscy0xMCIgZD0iTTksMjlhMiwyLDAsMCwwLDIsMkgyMmEyLDIsMCwwLDAsMi0yVjIzYTIsMiwwLDAsMC0yLTJIMTFhMiwyLDAsMCwwLTIsMnY2WiIvPjxsaW5lIGNsYXNzPSJjbHMtMTEiIHgxPSIxOCIgeDI9IjE4IiB5MT0iMzEiIHkyPSIyMSIvPjxsaW5lIGNsYXNzPSJjbHMtMTEiIHgxPSI5IiB4Mj0iMTciIHkxPSIyNyIgeTI9IjI3Ii8+PGxpbmUgY2xhc3M9ImNscy0xMSIgeDE9IjE4IiB4Mj0iMjQiIHkxPSIyNSIgeTI9IjI1Ii8+PC9zdmc+"
            />
          </span>
        </div>
        <span style={{ display: "block", margin: "0 auto 7px" }}>
          Card Number
        </span>
        <input
          type="number"
          style={inputCartNumber}
          className="w-100 white-placeholder"
          placeholder="xxxx xxxx xxxx xxxx"
        />
        <div style={cardholderContainer}>
          <label>Card Holder</label>
          <input
            type="text"
            style={inputCartNumber}
            placeholder="HO TRUNG ANH"
            placeholderstype={{ color: "white" }}
            className="w-100 white-placeholder"
          />
        </div>
        <div style={expContainer}>
          <label style={{ display: "block", margin: " 0 auto 7px" }}>
            Expiration
          </label>
          <input
            type="number"
            style={{ ...inputCartNumber, width: "45% " }}
            className="white-placeholder is-invalid"
            placeholder="MM"
          />
          <input
            type="number"
            style={{ ...inputCartNumber, width: "45% ", float: "right" }}
            className="white-placeholder "
            placeholder="YY"
          />
        </div>
      </div>
      <div style={{ ...CartFront, ...CartBack }}>
        <div style={CartStripe}></div>
      </div>
      <button
        type="button"
        // transform: "translate(-152px, -35px)"
        style={{ ...CartBtn }}
        className="CartBtnPayment"
      >
        Thanh Toán
      </button>
    </div>
  );
};

export default CartAtm;