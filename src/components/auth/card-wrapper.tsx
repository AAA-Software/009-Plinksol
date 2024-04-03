"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Header } from "@/components/auth/header";
import { Social } from "@/components/auth/social";
import { BackButton } from "@/components/auth/back-button";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
  backButtonAction: string;
}

export const CardWrapper = ({
  children,
  headerLabel,
  backButtonLabel,
  backButtonHref,
  showSocial,
  backButtonAction,
}: CardWrapperProps) => {
  return (
    <Card className="bg-[#202331] border-none text-white w-[480px] rounded-2xl z-10 flex flex-col">
      {/* <Card className="w-[400px] shadow-md"> */}
      <CardHeader>
        <Header label={headerLabel} />
      </CardHeader>

      {showSocial && (
        <CardFooter>
          <Social />
        </CardFooter>
      )}
      <CardContent>{children}</CardContent>
      <CardFooter>
        <BackButton
          action={backButtonAction}
          label={backButtonLabel}
          href={backButtonHref}
        />
      </CardFooter>
    </Card>
  );
};
