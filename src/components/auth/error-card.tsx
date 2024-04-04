import { FaExclamationTriangle } from "react-icons/fa";

import { CardWrapper } from "@/components/auth/card-wrapper";
import { Button } from "../ui/button";
import Link from "next/link";

export const ErrorCard = () => {
  return (
    <CardWrapper
      headerLabel=""
      backButtonHref="/auth/signin"
      backButtonAction="Sign In"
      backButtonLabel="Back to"
    >
      <div className="w-full flex justify-center items-center -mt-10">
        <FaExclamationTriangle className="text-destructive h-10 w-10" />
      </div>
      <div className="w-full flex flex-col mt-4 items-center">
        <h1 className="text-2xl font-sora font-semibold">
          Something went wrong
        </h1>
        <p className=" font-sora text-white/70 font-light text-base">
          We encountered an error on our end, please try again
        </p>

        <Link className=" w-full" href="/auth/signin">
          <Button className="w-full mt-6">Try Again</Button>
        </Link>
      </div>
    </CardWrapper>
  );
};
