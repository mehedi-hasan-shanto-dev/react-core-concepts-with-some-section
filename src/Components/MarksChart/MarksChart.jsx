import { use } from "react";
import React from "react";
import { Bar, BarChart, XAxis, YAxis } from "recharts";

const MarksChart = ({ marksPromise }) => {
  const marksDataRes = use(marksPromise);
  const marksData = marksDataRes.data.data;

  const marksChartData = marksData.map((studentData) => {
    const student = {
      id: studentData.student_id,
      name: studentData.name,
      physics: studentData.marks.physics,
      chemistry: studentData.marks.chemistry,
      math: studentData.marks.math,
    };
    const avg = (student.chemistry + student.physics + student.math) / 3;
    student.avg = avg;
    return student;
  });

  console.log(marksChartData);

  return (
    <div>
      <BarChart width={500} height={300} data={marksChartData}>
        <XAxis dataKey="name" />
        <YAxis></YAxis>
        <Bar dataKey="avg" fill="yellow" />
        <Bar dataKey="chemistry" fill="blue" />
      </BarChart>
    </div>
  );
};

export default MarksChart;
