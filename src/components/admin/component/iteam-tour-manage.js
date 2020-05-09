import React from "react";
import { formCurencyVN } from "../../../common/funcCommon";
import { Link } from "react-router-dom";

const IteamTourManage = (props) => {
  const { id, price, city, country, index } = props.data;
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{id}</td>
      <td>{formCurencyVN(price)}</td>
      <td>{city + " - " + country} </td>
      <td>
        <Link to={`/admin/tour-management/edit-tour/${id}`}>
          <i className="fa fa-edit text-primary"></i>
        </Link>{" "}
        <i className="fa fa-trash-alt text-danger"></i>
      </td>
    </tr>
  );
};

export default IteamTourManage;
