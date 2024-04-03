"use client";

import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/button";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

export const Social = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");

  const onClick = (provider: "google" | "github") => {
    signIn(provider, {
      callbackUrl: callbackUrl || DEFAULT_LOGIN_REDIRECT,
    });
  };

  return (
    <div className="w-full flex flex-col">
      <h4 className="text-lg font-switzer mb-4">Continue with</h4>
      <div className="flex items-center w-full gap-x-2">
        <Button
          size="lg"
          className="w-full bg-[#04192B] hover:bg-[#062C3F] border-[#04192B]"
          variant="outline"
          onClick={() => onClick("google")}
        >
          <FcGoogle className="h-6 w-6" />
        </Button>
        <Button
          size="lg"
          className="w-full bg-[#04192B] hover:bg-[#062C3F] border-[#04192B] text-white hover:text-white"
          variant="outline"
          onClick={() => onClick("github")}
        >
          <FaGithub className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
};
