// import { Poppins } from "next/font/google";

// import { cn } from "@/lib/utils";

// const font = Poppins({
//   subsets: ["latin"],
//   weight: ["600"],
// });

interface HeaderProps {
  label: string;
}

export const Header = ({ label }: HeaderProps) => {
  return (
    <div className="w-full pt-2">
      <h1 className=" text-xl md:text-2xl font-sora font-semibold">{label}</h1>
    </div>
  );
};
