import Announcements from "../../../components/Announcements";
import EventCalender from "../../../components/EventCalender";

function StudentPage() {
  return (
    <div className="flex flex-col xl:flex-row gap-4 p-4 ">
      {/* left */}
      <div className="w-full xl:w-2/3 bg-white p-4 rounded-lg">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold">Schedule(4A)</h1>
          <div className="flex items-center gap-8">
            <p className="font-medium text-sm">Monday Aug 12</p>
            <div className="flex items-center gap-1">
              <span className="bg-atlasPurpleLight text-black px-3 py-1 text-sm">
                Work Week
              </span>
              <span className="bg-atlasPurple text-black px-3 py-1 text-sm ">
                Day
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* right */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        <EventCalender />
        <Announcements />
      </div>
    </div>
  );
}

export default StudentPage;
