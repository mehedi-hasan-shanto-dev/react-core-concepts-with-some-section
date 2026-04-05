import React from "react";
import { Line, LineChart, XAxis, YAxis } from "recharts";

const resultData = [
  { id: 1, name: "Rahim", physics: 85, chemistry: 78, math: 90 },
  { id: 2, name: "Karim", physics: 72, chemistry: 75, math: 80 },
  { id: 3, name: "Ayesha", physics: 88, chemistry: 92, math: 95 },
  { id: 4, name: "Nusrat", physics: 81, chemistry: 85, math: 87 },
  { id: 5, name: "Sohan", physics: 70, chemistry: 68, math: 74 },
];

const ReasultChart = () => {
  return (
    <div>
      <LineChart width={500} height={300} data={resultData}>
        <XAxis dataKey="name" />
        <YAxis />

        <Line dataKey="math" stroke="blue" />
        <Line dataKey="chemistry" stroke="green" />
        <Line dataKey="physics" stroke="red" />
      </LineChart>
    </div>
  );
};

export default ReasultChart;
