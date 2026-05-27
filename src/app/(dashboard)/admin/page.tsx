import Announcements from "../../../components/Announcements";
import AttendanceChart from "../../../components/charts/AttendanceChart";
import CountCharts from "../../../components/charts/CountCharts";
import FinanceChart from "../../../components/charts/FinanceChart";
import EventCalender from "../../../components/EventCalender";
import UserCard from "../../../components/UserCard";

function AdminPage() {
  return (
    <div className="flex flex-col md:flex-row gap-4 p-4">
      {/* left */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8 ">
        <div className="flex justify-between flex-wrap gap-4">
          <UserCard type="admin" />
          <UserCard type="user" />
          <UserCard type="teacher" />
          <UserCard type="parent" />
        </div>
        {/* charts */}
        <div className="flex flex-col gap-8">
          {/* top charts */}
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="w-full lg:w-1/3 h-[450px]">
              <CountCharts />
            </div>
            <div className="w-full lg:w-2/3 h-[450px]">
              <AttendanceChart />
            </div>
          </div>
          {/* bottom charts */}
          <div className="w-full h-[500px] ">
            <FinanceChart />
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

export default AdminPage;
