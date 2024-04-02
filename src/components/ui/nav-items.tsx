"use client";

import Link from "next/link";
import { useLayoutEffect, useState } from "react";
import { motion } from "framer-motion";

const navigation = [
  { name: "Home", link: "/#home" },
  { name: "About Us", link: "/#about" },
  { name: "Plinkosol Coin", link: "/#plinksol-coin" },
  { name: "Presale", link: "/#presale" },
  { name: "Roadmap", link: "/#roadmap" },
  { name: "FAQs", link: "/#faqs" },
];

const useScrollspy = (ids: any, offset = 0) => {
  const [activeId, setActiveId] = useState("");

  useLayoutEffect(() => {
    const listener = () => {
      const scroll = window.pageYOffset;
      const positions = ids.map((id: any) => {
        const element = document.getElementById(id);
        if (!element) return { id, top: -1, bottom: -1 };
        const rect = element.getBoundingClientRect();
        const top = rect.top + scroll - offset;
        const bottom = rect.bottom + scroll - offset;
        return { id, top, bottom };
      });
      const activePosition = positions.find(
        ({ top, bottom }: { top: any; bottom: any }) =>
          scroll >= top && scroll < bottom
      );
      setActiveId(activePosition ? activePosition.id : "");
    };

    listener();

    window.addEventListener("resize", listener);
    window.addEventListener("scroll", listener);

    return () => {
      window.removeEventListener("resize", listener);
      window.removeEventListener("scroll", listener);
    };
  }, [ids, offset]);

  return activeId;
};

export const NavItems = () => {
  const ids = navigation.map((item) => item.link.slice(2));
  const activeLink = useScrollspy(ids, 54);

  return (
    <div className="flex gap-10">
      {navigation.map((item) => {
        const isSelected = item.link.slice(2) === activeLink;
        return (
          <Link
            key={item.name}
            href={item.link}
            className={`relative leading-6 no-underline text-base font-normal font-sora ${
              isSelected ? "font-medium text-white" : "text-white/70"
            }`}
          >
            {item.name}
            {isSelected && (
              <motion.div className="absolute -bottom-[1px] left-0 right-0 h-[1px]">
                <svg
                  width="60"
                  height="5"
                  viewBox="0 0 60 5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="59.8711"
                    height="3.39844"
                    rx="1.69922"
                    transform="matrix(-1 0 0 1 59.8711 0.726562)"
                    fill="url(#paint0_linear_171_571)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_171_571"
                      x1="0"
                      y1="1.69922"
                      x2="59.8711"
                      y2="1.69922"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop
                        offset="0.225"
                        stop-color="#63CA2D"
                        stop-opacity="0"
                      />
                      <stop offset="1" stop-color="#63CA2D" />
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>
            )}
          </Link>
        );
      })}
    </div>
  );
};
