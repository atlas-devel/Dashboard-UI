import Link from "next/link";
import Image from "next/image";
import SidebarMenu from "../../components/sidebar/SidebarMenu";
import NavbarItem from "../../components/Navbar/NavbarItem";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="flex h-screen w-screen">
      {/* dashboard layout */}
      {/* left */}
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4">
        <Link
          href="/"
          className="flex items-center justify-center lg:justify-start gap-2 "
        >
          <Image src="/logo.png" alt="logo" width={32} height={32} />
          <span className="hidden lg:block font-bold">UniView</span>
        </Link>
        <SidebarMenu />
      </div>
      {/* right */}
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll">
        <NavbarItem />
        {children}
      </div>
    </section>
  );
}
