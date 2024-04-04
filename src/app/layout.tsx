import { sora } from "@/lib/customFonts";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Plinksol - Presale",
  description:
    "Discover the future of online gaming with PlinkoSol – the platform that  brings the excitement of Plinko to the blockchain. Experience the thrill of playing Plinko online, backed by the security and transparency of  blockchain technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className=" scroll-smooth overflow-x-hidden">
      <body
        className={cn(
          "antialiased select-none bg-[#10121A] overflow-x-hidden",
          `${sora.variable}`
        )}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
