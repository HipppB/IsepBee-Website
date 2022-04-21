import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Brush,
  AreaChart,
  Area,
  ResponsiveContainer,
} from "recharts";

const regraphique = () => {
  const data = [
    {
      name: "01 Avril",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "05 Avril",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "10 Avril",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "15 Avril",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "20 Avril",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "25 Avril",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "30 Avril",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <div className="responsiveContainerTestUn">
      <div className="responsiveContainerTest">
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <AreaChart
            width={800}
            height={300}
            data={data}
            syncId="anyId"
            margin={{
              top: 0,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="natural" dataKey="pv" stroke="#82ca9d" fill="red" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default regraphique;
