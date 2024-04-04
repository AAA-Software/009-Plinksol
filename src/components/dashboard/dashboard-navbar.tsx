"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import { logout } from "@/actions/logout";
import { useRouter } from "next/navigation";

const DashboardNavbar = () => {
  const router = useRouter();
  const signOut = () => {
    logout();
    router.push("/");
  };

  return (
    <div className="w-full py-3 flex items-center justify-between">
      <div>
        <h2 className=" font-sora font-normal text-2xl text-white">Plinko</h2>
      </div>

      <div className="flex flex-row gap-6">
        <div className="bg-[#1A1D29] flex items-center rounded-full px-1 py-1">
          <div className="flex flex-row gap-2.5 pl-2 pr-4">
            <Image
              width={24}
              height={24}
              src="/img/balance.svg"
              alt="Balance"
            />
            <h4 className=" font-sora text-white font-normal">0.00</h4>
          </div>
          <div>
            <Button className=" rounded-full">Deposit</Button>
          </div>
        </div>

        <div className="flex gap-2 items-center">
          <div className="h-12 w-12 aspect-square rounded-full flex items-center justify-center">
            <div className="relative w-full h-full">
              <Image
                fill
                src="/img/profile-picture.png"
                alt="Profile picture"
              />
            </div>
          </div>
          <div className="h-12 w-12 aspect-square rounded-full bg-[#1A1D29] flex items-center justify-center">
            <div className="relative w-6 h-6">
              <Image fill src="/img/chat.svg" alt="Chat" />
            </div>
          </div>
          <div className="h-12 w-12 aspect-square rounded-full bg-[#1A1D29] flex items-center justify-center">
            <div className="relative w-6 h-6">
              <Image fill src="/img/settings.svg" alt="Settings" />
            </div>
          </div>
          <div
            onClick={signOut}
            className="h-12 w-12 aspect-square rounded-full bg-[#1A1D29] flex items-center justify-center hover:bg-[#181B26] cursor-pointer"
          >
            <div className="relative w-6 h-6">
              <Image fill src="/img/sign-out.svg" alt="Sign Out" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
