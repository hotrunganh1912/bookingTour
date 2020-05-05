import React, { useState, useEffect } from "react";
import {
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  AreaChart,
  Area,
} from "recharts";

const data = [
  {
    name: "Tháng 1 ",
    "Doanh Thu": 1,
  },
  {
    name: "Tháng 2",
    "Doanh Thu": 5000000,
  },
  {
    name: "Tháng 3",
    "Doanh Thu": 2000,
  },
  {
    name: "Tháng 4",
    "Doanh Thu": 6000000000,
  },
  {
    name: "Tháng 5",
    "Doanh Thu": 1890,
  },
  {
    name: "Tháng 6",
    "Doanh Thu": 2390,
  },
  {
    name: "Tháng 7",
    "Doanh Thu": 3490,
  },
  {
    name: "Tháng 8",
    "Doanh Thu": 3490,
  },
  {
    name: "Tháng 9",
    "Doanh Thu": 1,
  },
  {
    name: "Tháng 10",
    "Doanh Thu": 70000000,
  },
  {
    name: "Tháng 11",
    "Doanh Thu": 3490,
  },
  {
    name: "Tháng 12",
    "Doanh Thu": 6000000000,
  },
];

const ChartFlMonth = () => {
  const [widthChart, setwidthChart] = useState(window.innerWidth * 0.6);

  useEffect(() => {
    const handlerResize = () => {
      setwidthChart(window.innerWidth * 0.6);
    };
    window.addEventListener("resize", handlerResize);

    return () => window.removeEventListener("resize", handlerResize);
  });

  return (
    <div className="p-2">
      <h6 style={{ color: "#4e73df", fontWeight: 700 }}>
        Doanh Thu Theo Tháng
      </h6>
      <AreaChart
        className="mx-auto"
        width={widthChart}
        height={500}
        data={data}
        syncId="anyId"
        margin={{
          top: 10,
          right: 30,
          left: 80,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="12 12" />
        <XAxis dataKey="name" />
        <YAxis
          tickFormatter={(e) => {
            return e.toLocaleString("it-IT", {
              style: "currency",
              currency: "VND",
            });
          }}
          // unit="vnd"
        />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="Doanh Thu"
          stroke="#82ca9d"
          fill="#82ca9d"
          // unit="vnD"
          formatter={(e) => {
            return e.toLocaleString("it-IT", {
              style: "currency",
              currency: "VND",
            });
          }}
        />
        <Legend />
        <Line type="monotone" dataKey="Doanh Thu" stroke="#82ca9d" />
      </AreaChart>
    </div>
  );
};

export default ChartFlMonth;
