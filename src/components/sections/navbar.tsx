"use client";

import Image from "next/image";
import Link from "next/link";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../ui/sheet";
import Wrapper from "../wrapper/wrapper";

import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { NavItems } from "../ui/nav-items";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // You can adjust the scroll threshold as needed
      const scrollThreshold = 10;

      if (scrollY >= scrollThreshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`w-full py-2 sticky top-0 z-[999999] ${
        isScrolled
          ? "bg-[#0E1017] border-b border-b-white/5"
          : " bg-transparent border-b border-b-white/5"
      }`}
    >
      <Wrapper className="flex flex-row justify-between items-center">
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

        <div className="hidden lg:block">
          <div className="flex flex-row items-center gap-10 2xl:gap-16">
            <NavItems />
          </div>
        </div>

        <div className="hidden lg:block">
          <div className="flex flex-row items-center gap-2 2xl:gap-4">
            <Button variant={"link"}>Login</Button>
            <Button>
              Sign Up <ArrowRight className="ml-3" />
            </Button>
          </div>
        </div>

        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger>
              <div className="primary-button-small-backdrop px-5 xl:p-[3px] rounded-[14px] ">
                <div className="primary-button-small aspect-square font-sora font-medium rounded-[12px] px-2.5 py-2.5">
                  <Image
                    width={28}
                    height={8}
                    src="/img/menu.svg"
                    alt="Menu icon"
                  />
                </div>
              </div>
            </SheetTrigger>
            <SheetContent side="left" className="z-[999999]">
              <SheetClose asChild>
                <Link href="/">
                  <div className="relative w-[135px] h-[55px] md:w-[135px] md:h-[55px] hover:scale-110 transition-all ease-in-out">
                    <Image
                      fill
                      src="/img/logo.png"
                      className=" object-contain object-center"
                      quality={100}
                      alt="Fashva logo"
                    />
                  </div>
                </Link>
              </SheetClose>
              <div className="w-full flex flex-col items-start justify-start mt-10">
                <div className="text-black uppercase font-medium font-sora text-lg flex flex-col items-start">
                  <SheetClose asChild>
                    <Link href="/">
                      <h4 className="mt-6">Home</h4>
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href="/#about-us">
                      <h4 className="mt-6">About Us</h4>
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href="/#services">
                      <h4 className="mt-6">Services</h4>
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href="/#faq">
                      <h4 className="mt-6">FAQs</h4>
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href="/#case-studies">
                      <h4 className="mt-6">Case Studies</h4>
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href="/blogs">
                      <h4 className="mt-6 mb-8">Blog</h4>
                    </Link>
                  </SheetClose>
                  <div className="w-full flex flex-col items-start gap-1">
                    <SheetClose asChild>
                      <Link href="/schedule-call"></Link>
                    </SheetClose>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </Wrapper>
    </div>
  );
};

export default Navbar;
