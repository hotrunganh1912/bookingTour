import React from "react";
import BgTag from "../component/tag-admin/bg-tag";
import ChartFlMonth from "../component/chart/chart-fl-month";

const DashboardAdmin = (props) => {
  const datatg = [
    {
      color: "#4e73df",
      title: "Số booking trong  ngày",
      value: 100000,
      icon: "fa-ticket-alt",
    },
    {
      color: "#4e73df",
      title: "Doanh Thu Ngày",
      value: 100000000000,
      icon: "fa-dollar-sign",
    },
    {
      color: "#4e73df",
      title: "Tổng Doanh Thu",
      value: 100000,
      icon: "fa-dollar-sign",
    },
    {
      color: "#4e73df",
      title: "Danh Thu Tháng",
      value: 100000,
      icon: "fa-dollar-sign",
    },
  ];

  return (
    <>
      <h1 style={{ color: "#5a5c69" }}>Dashboard</h1>
      <div className="d-flex mx-0 mt-0 mb-5 flex-wrap  justify-content-around">
        {datatg.map((e, i) => {
          return <BgTag key={"dataTag" + i} data={e} />;
        })}
      </div>
      <h1 style={{ color: "#5a5c69" }}>Doanh Thu Theo Tháng</h1>
      <div className="p-3 shadow bg-white mb-5">
        <ChartFlMonth />
      </div>
    </>
  );
};

export default DashboardAdmin;
