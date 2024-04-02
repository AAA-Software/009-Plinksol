import Image from "next/image";
import Link from "next/link";
import { NavItems } from "../ui/nav-items";
import { Separator } from "../ui/separator";
import Wrapper from "../wrapper/wrapper";
import FooterLink from "../ui/footer-link";

const Footer = () => {
  return (
    <div className="w-full bg-[#0E1017] py-10">
      <div className=" w-full flex flex-col items-center">
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
        <div className="mt-5" />
        <NavItems />
        <div className="w-[35%] flex flex-col items-center justify-center mt-10">
          <Separator />
        </div>
      </div>

      <Wrapper className="mt-20">
        <div className="w-full flex flex-row justify-between items-center">
          <div>
            <p className=" font-sora text-white/70 font-light text-base">
              PlinkSol 2024, All rights reserved
            </p>
          </div>

          <div className="flex flex-row gap-4">
            <div className="flex items-center justify-center h-12 w-12 rounded-full aspect-square bg-[#3BA901] hover:bg-[#3BA901]/90 cursor-pointer hover:scale-105 ease-in-out transition-all duration-200">
              <Image
                width={20}
                quality={100}
                height={20}
                src="/img/x.png"
                alt="Twitter/X"
              />
            </div>
            <div className="flex items-center justify-center h-12 w-12 rounded-full aspect-square bg-[#3BA901] hover:bg-[#3BA901]/90 cursor-pointer hover:scale-105 ease-in-out transition-all duration-200">
              <Image
                width={20}
                quality={100}
                height={20}
                src="/img/ig.png"
                alt="Instagram"
              />
            </div>
            <div className="flex items-center justify-center h-12 w-12 rounded-full aspect-square bg-[#3BA901] hover:bg-[#3BA901]/90 cursor-pointer hover:scale-105 ease-in-out transition-all duration-200">
              <Image
                width={20}
                quality={100}
                height={20}
                src="/img/telegram.png"
                alt="Telegram"
              />
            </div>
          </div>

          <div className="flex flex-row gap-6">
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

export default Footer;
