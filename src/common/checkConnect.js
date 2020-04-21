import React from "react";

const CheckConnect = (props) => {
  return (
    <div style={{ ...props.custome }} className="w-100 text-center" role="status">
      <div class="alert alert-danger" role="alert">
        Kiểm tra kết nối mạng
      </div>
    </div>
  );
};

export default CheckConnect;
