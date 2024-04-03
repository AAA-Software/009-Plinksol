"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";

interface BackButtonProps {
  href: string;
  action: string;
  label: string;
}

export const BackButton = ({ href, label, action }: BackButtonProps) => {
  return (
    <Button
      variant="link"
      className="text-white m-auto font-sora font-light md:font-light text-base bg-[#262A3A] w-full rounded-b-2xl rounded-t-none h-14"
      size="sm"
      asChild
    >
      <Link href={href}>
        {label}
        <span className="text-[#6AD035] ml-2">{action}</span>
      </Link>
    </Button>
  );
};
