import React, { PureComponent } from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

const Pierecharts = () => {
  const data = [
    { name: "Geeksforgeeks", students: 400, fill:"#8884d8"},
    { name: "Technical scripter", students: 700, fill:"#1af624"},
    { name: "Geek-i-knack", students: 200, fill:"red"},
    { name: "Geek-o-mania", students: 1000, fill:"white" },
  ];
  return (
    <PieChart width={700} height={700}>
      <Pie data={data} dataKey="students" outerRadius={250} label>
          
      </Pie>
    </PieChart>
  );
};

export default Pierecharts;