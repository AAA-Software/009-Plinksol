import FooterLink from "@/components/ui/footer-link";
import Wrapper from "@/components/wrapper/wrapper";
import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-[#020617] relative w-full min-h-[100vh] pb-10">
      <Image
        width={"1000"}
        height={"1000"}
        src="/img/auth-bg.png"
        className=" object-contain absolute right-0"
        alt="Backdrop"
      />
      <Wrapper className="flex flex-row justify-between w-full py-2 md:py-4 sticky top-0">
        <Link href="/">
          <div className=" relative w-[135px] h-[55px] md:w-[135px] md:h-[55px] hover:scale-110 transition-all ease-in-out">
            <Image
              fill
              quality={100}
              src="/img/logo.png"
              className=" object-contain object-center"
              alt="Plinksol logo"
            />
          </div>
        </Link>
      </Wrapper>

      {children}
      <Wrapper className=" bottom-10 absolute">
        <div className="w-full flex flex-row justify-between items-center">
          <div>
            <p className=" font-sora text-white/70 font-light text-base">
              PlinkSol 2024, All rights reserved
            </p>
          </div>

          <div className="flex flex-row gap-4 mt-4 items-center">
            <FooterLink link="/legals/privacy-policy" text="Privacy Policy" />
            <FooterLink
              link="/legals/terms-of-service"
              text="Terms of Service"
            />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default AuthLayout;
