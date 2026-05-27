import { menuItems, role } from "../../lib/data";
import { Menu, MenuItem } from "../../types/types";
import Link from "next/link";

function SidebarMenu() {
  return (
    <div className="mt-4 text-sm">
      {menuItems.map((menu: Menu) => (
        <div key={menu.title}>
          <h3 className="hidden lg:block text-gray-400 font-light my-4">
            {menu.title}
          </h3>
          <div>
            {menu.items.map((item: MenuItem) => {
              return (
                item.visible.includes(
                  role as "student" | "teacher" | "parent" | "admin",
                ) && (
                  <Link
                    href={item.href}
                    key={item.label}
                    className="flex items-center gap-4 rounded-md hover:bg-atlasSkyLight md:px-2 py-2 justify-center lg:justify-start text-gray-500 py-2"
                  >
                    <img
                      src={item.icon}
                      alt={item.label}
                      width={20}
                      height={20}
                    />
                    <span className="hidden lg:block">{item.label}</span>
                  </Link>
                )
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

export default SidebarMenu;
