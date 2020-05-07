import React from "react";

const IteamInput = (props) => {
  const { label, name, placeholder, id, value } = props.data;
  return (
    <div className="form-group col-md-6">
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        name={name}
        className="form-control"
        id={id}
        value={value}
        placeholder={placeholder}
        onChange={props.handerOnChangeDataTour}
      />
    </div>
  );
};

export default IteamInput;
