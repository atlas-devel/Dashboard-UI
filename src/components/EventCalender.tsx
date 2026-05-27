"use client";

import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Image from "next/image";

const events = [
  {
    id: 1,
    title: "Math Class",
    time: "10:00 AM - 11:00 AM",
    description: "Algebra and Geometry",
  },
  {
    id: 2,
    title: "Science Fair",
    time: "1:00 PM - 3:00 PM",
    description: "Annual school science exhibition",
  },
  {
    id: 3,
    title: "Parent-Teacher Meeting",
    time: "4:00 PM - 5:00 PM",
    description: "Discuss student progress with parents",
  },
  {
    id: 4,
    title: "Sports Day",
    time: "9:00 AM - 2:00 PM",
    description: "Annual sports event with various competitions",
  },
];

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

function EventCalender() {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className="bg-white rounded-xl p-4">
      <Calendar onChange={onChange} value={value} />
      <div className="flex justify-between items-center ">
        <h1 className="font-semibold text-xl mt-4">Events</h1>
        <Image src="/moreDark.png" alt="more" width={20} height={20} />
      </div>
      <div className="mt-4 flex flex-col gap-4">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-md border-t-4 border-2 odd:border-atlasSky even:border-atlasPurple p-5"
          >
            <div className="flex  justify-between ">
              <h1 className="font-semibold text-gray-600">{event.title}</h1>
              <p className="text-xs text-gray-300">{event.time}</p>
            </div>
            <p className="text-sm mt-2 text-gray-400">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default EventCalender;
