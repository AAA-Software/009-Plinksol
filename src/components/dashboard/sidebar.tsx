"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const routes = [
  {
    label: "Plinko",
    icon: "/img/plinko.svg",
    activeIcon: "/img/plinko.svg",
    href: "/dashboard",
  },
];

const Sidebar = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="space-y-4 pt-2 pb-4 flex flex-col h-screen bg-[#10121A] w-[280px] md:w-[270px] px-2 md:px-0 text-white">
      <div className="px-3 py-0 flex-1">
        <Link
          href="/dashboard"
          className="flex items-center pl-3 mb-12 mt-1.5 md:mb-5"
        >
          <div className=" relative w-[135px] h-[55px] md:w-[155px] md:h-[55px] hover:scale-110 transition-all ease-in-out">
            <Image
              fill
              quality={100}
              src="/img/logo.png"
              className=" object-contain object-center"
              alt="Plinksol logo"
            />
          </div>
        </Link>
        <div className="space-y-1 md:space-y-1.5">
          {routes.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              className={cn(
                "text-[16px] md:text-[18px] font-sora font-normal group h-[60px] flex py-3 pl-2 pr-3 w-[280px] md:w-full justify-start cursor-pointer hover:text-white hover:bg-[#232736]/10 rounded-full transition-all ease-in-out duration-300",
                pathname === route.href
                  ? "text-white bg-gradient-to-r from-[#262A3A]/60 to-[#232736]/0 hover:bg-gradient-to-r hover:from-[#232736]/50 hover:to-[#232736]/0"
                  : "text-[#929292]"
              )}
            >
              <div className="flex items-center flex-1">
                <div
                  className={cn(
                    "w-11 h-11 aspect-square rounded-full flex items-center justify-center mr-3.5",
                    pathname === route.href
                      ? " bg-[#333953]"
                      : " bg-transparent border border-white/20"
                  )}
                >
                  <Image
                    width={24}
                    height={24}
                    alt={route.label}
                    src={
                      pathname === route.href ? route.activeIcon : route.icon
                    }
                    className={cn("h-6 w-6")}
                  />
                </div>
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
