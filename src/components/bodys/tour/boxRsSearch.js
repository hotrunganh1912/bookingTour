import React from "react";
import FormBoxTour from "../listTour/formBoxTour";

const BoxRsSearch = (props) => {
  const datas = props.data;
  return (
    <div className="mover-list bg-light flex-wrap flex-grow p-3 rounded d-flex list-all-e-tour">
      {datas !== 0 &&
        datas.map((data, i) => {
          return <FormBoxTour key={"FormBoxTour" + i} data={data} />;
        })}
      {/* end display  box  */}
    </div>
  );
};

export default BoxRsSearch;
