"use client";
import Image from "next/image";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Mon",
    present: 400,
    absent: 240,
  },
  {
    name: "Tues",
    present: 300,
    absent: 139,
  },
  {
    name: "wed",
    present: 200,
    absent: 80,
  },
  {
    name: "Thurs",
    present: 278,
    absent: 390,
  },
  {
    name: "Fri",
    present: 180,
    absent: 480,
  },
];

function AttendanceChart() {
  return (
    <div className="bg-white rounded-xl w-full p-4 h-full flex flex-col justify-between">
      {/* title */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-lg font-semibold">Attendance</h1>
        <Image src="/moreDark.png" alt="more" width={20} height={20} />
      </div>
      {/* chart */}
      <ResponsiveContainer width="100%" height="90%">
        <BarChart
          style={{
            aspectRatio: 1.618,
          }}
          responsive
          data={data}
          barSize={20}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
          />
          <YAxis
            width="auto"
            axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
          />
          <Tooltip contentStyle={{borderRadius:"10px",borderColor:"lightgray"}} />
          <Legend
            align="left"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "20px", paddingBottom: "20px" }}
          />
          <Bar
            dataKey="present"
            fill="#FAE27C"
            radius={[10, 10, 0, 0]}
            legendType="circle"
          />
          <Bar
            dataKey="absent"
            fill="#C3EBFA"
            radius={[10, 10, 0, 0]}
            legendType="circle"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default AttendanceChart;
