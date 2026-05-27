import Image from "next/image";

function NavbarItem() {
  return (
    <div className="flex items-center justify-between px-4 py-3 ">
      {/* search box */}
      <div className="hidden md:flex items-center gap-2 texs-xs rounded-full ring-[1.5px] ring-gray-300 px-2">
        <Image
          className=""
          src="/search.png"
          alt="search icon"
          width={14}
          height={14}
        />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none p-1 w-[250px] "
        />
      </div>
      {/* icons and user profile */}
      <div className="flex max-md:ml-auto items-center gap-6">
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <Image src="/message.png" alt="message icon" height={20} width={20} />
        </div>
        <div className="relative bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <Image
            src="/announcement.png"
            alt="message icon"
            height={20}
            width={20}
          />
          <span className="bg-purple-500 absolute  -top-3 -right-3 text-xs  text-white rounded-full   w-5 h-5 flex items-center justify-center font-medium">
            1
          </span>
        </div>
        <div className=" flex flex-col ">
          <span className="text-xs leading-3 font-medium">Jean leon</span>
          <span className="text-gray-500 text-right text-[10px]">Admin</span>
        </div>
        <Image
          src="/avatar.png"
          alt="User Avatar"
          height={36}
          width={36}
          className="rounded-full"
        />
      </div>
    </div>
  );
}

export default NavbarItem;
