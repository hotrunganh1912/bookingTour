import React from "react";
import Payment from "../../../payment/payment";
import { useState } from "react";

const NotFound = () => {
  const [showModal, setShowModal] = useState(false);
  const handlerCkickShowModal = () => {
    setShowModal(!showModal);
  };
  return (
    <div className="container">
      <div className="alert alert-danger" role="alert">
        <h4 className="alert-heading">404 Not Found</h4>
        <p>Không Tìm Thấy Gì</p>
        <hr />
        <p className="mb-0">Vui lòng kiểm tra lại URL</p>
      </div>
      <button onClick={handlerCkickShowModal}>show Modal </button>
      {showModal ? (
        <Payment handlerCkickShowModal={handlerCkickShowModal} />
      ) : (
        ""
      )}
    </div>
  );
};
export default NotFound;
