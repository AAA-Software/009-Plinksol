import Image from "next/image";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import Wrapper from "../wrapper/wrapper";

const Community = () => {
  return (
    <div className="w-full flex flex-col items-center mt-[10rem] mb-[20rem]">
      <Wrapper className=" max-w-[1336px]">
        <div className="flex flex-row justify-center w-full h-[380px]">
          <div className="flex flex-col border-r border-r-black border-dashed rounded-r-2xl bg-gradient-to-b from-[#66CC30] to-[#3FAC05] h-full w-20" />
          <div className=" flex flex-col items-center justify-center rounded-2xl bg-gradient-to-b from-[#66CC30] to-[#3FAC05] w-full">
            <h3 className="text-black font-sora font-semibold text-5xl">
              Join Community
            </h3>
            <h4 className="text-black font-sora font-medium text-lg mt-4">
              Stay Updated with PlinkoSol
            </h4>

            <p className=" font-sora text-base text-black font-normal mt-6 text-center">
              Get news and updates about PlinkoSol directly to your inbox.{" "}
              <br className="hidden md:block" />
              Just join the Telegram channel to stay in the loop.
            </p>
            <Button variant={"outlineBlack"} className="mt-10">
              Join Telegram Community{" "}
              <Image
                width={20}
                quality={100}
                height={20}
                className="ml-3"
                src="/img/telegram.png"
                alt="Telegram"
              />
            </Button>
          </div>

          <div className="flex flex-col border-l border-l-black border-dashed rounded-l-2xl bg-gradient-to-b from-[#66CC30] to-[#3FAC05] h-full w-20" />
        </div>
      </Wrapper>
    </div>
  );
};

export default Community;
