"use client";
import Image from "next/image";
import {
  RadialBarChart,
  RadialBar,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Total",
    count: 103,
    fill: "white",
  },
  {
    name: "girls",
    count: 50,
    fill: "#FAE27C",
  },
  {
    name: "boys",
    count: 53,
    fill: "#C3EBFA",
  },
];

function CountCharts() {
  return (
    <div className="bg-white rounded-xl w-full p-4 h-full flex flex-col justify-between">
      {/* title */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-lg font-semibold">Students</h1>
        <Image src="/moreDark.png" alt="more" width={20} height={20} />
      </div>
      {/* chart */}
      <div className="relative w-full h-[75%] ">
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            style={{
              aspectRatio: 1.618,
            }}
            responsive
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={32}
            data={data}
          >
            <RadialBar background dataKey="count" />
            <Tooltip />
          </RadialBarChart>
        </ResponsiveContainer>
        <Image
          src="/maleFemale.png"
          alt="maleFemale"
          width={50}
          height={50}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
        />
      </div>
      {/* icons */}
      <div>
        <div className="flex justify-around item-center">
          <div className="flex flex-col justify-center items-center gap-1">
            <div className="bg-atlasSky rounded-full w-4 h-4 " />
            <h1 className="font-bold tracking-tighter">1,234</h1>
            <p className="text-xs text-gray-300">Boys</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-1">
            <div className="bg-atlasYellow rounded-full w-4 h-4 " />
            <h1 className="font-bold tracking-tighter">1,234</h1>
            <p className="text-xs text-gray-300">Girls</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountCharts;
