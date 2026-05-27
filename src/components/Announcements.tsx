function Announcements() {
  return (
    <div className="bg-white rounded-xl p-4">
      <div className="flex justify-between items-center ">
        <h1 className="font-semibold text-xl mt-4">Announcements</h1>
        <p className="text-xs text-gray-400 hover:underline cursor-pointer mt-4">
          view All
        </p>
      </div>
      <div className="flex flex-col gap-4 mt-2">
        <div className="bg-atlasSkyLight rounded-md p-4">
          <div className="flex justify-between item-center mb-2">
            <h1 className="font-semibold text-gray-600">System Update</h1>
            <span className="px-3 py-1 bg-white text-gray-400 rounded-sm text-xs font-semibold">
              2025-01-15
            </span>
          </div>
          <p className="text-sm text-gray-400">
            New software version will be rolled out today. All users should save
            their work before 4:00 PM. Support is available if any issue occurs.
          </p>
        </div>
        <div className="bg-atlasPurpleLight rounded-md p-4">
          <div className="flex justify-between items-center mb-2">
            <h1 className="font-semibold text-gray-600">Staff Meeting</h1>
            <span className="px-3 py-1 bg-white text-gray-400 rounded-sm text-xs font-semibold">
              2025-01-20
            </span>
          </div>
          <p className="text-sm text-gray-400">
            Monthly review meeting is scheduled for Monday. Please bring your
            progress reports and notes. Attendance is required for all
            department heads.
          </p>
        </div>
        <div className="bg-atlasYellowLight rounded-md p-4">
          <div className="flex justify-between items-center mb-2">
            <h1 className="font-semibold text-gray-600">Campus Notice</h1>
            <span className="px-3 py-1 bg-white text-gray-400 rounded-sm text-xs font-semibold">
              2025-01-18
            </span>
          </div>
          <p className="text-sm text-gray-400">
            Maintenance work will begin in the east wing. Noise may be heard
            between 9:00 AM and 2:00 PM. Please use alternative entrances during
            this time.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Announcements;
