import Image from "next/image";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import Wrapper from "../wrapper/wrapper";

const Community = () => {
  return (
    <div className="w-full flex flex-col items-center mt-[5rem] md:mt-[10rem] mb-[12rem] md:mb-[20rem]">
      <Wrapper className="md:max-w-[1336px]">
        <div className="flex flex-col md:flex-row justify-center w-full md:h-[380px]">
          <div className="flex flex-col border-b border-b-black md:border-r md:border-r-black border-dashed rounded-b-2xl md:rounded-r-2xl bg-gradient-to-b from-[#66CC30] to-[#3FAC05] h-12 md:h-full w-full md:w-20" />
          <div className=" flex flex-col items-center justify-center py-10 md:py-0 rounded-2xl bg-gradient-to-b from-[#66CC30] to-[#3FAC05] w-full">
            <h3 className="text-black font-sora font-semibold text-4xl md:text-5xl">
              Join Community
            </h3>
            <h4 className="text-black font-sora font-medium text-lg mt-4">
              Stay Updated with PlinkoSol
            </h4>

            <p className=" font-sora text-base text-black font-normal mt-6 text-center px-8 md:px-0">
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

          <div className="flex flex-col border-t border-t-black md:border-l md:border-l-black border-dashed rounded-t-2xl md:rounded-l-2xl bg-gradient-to-b from-[#66CC30] to-[#3FAC05] h-12 md:h-full w-full md:w-20" />
        </div>
      </Wrapper>
    </div>
  );
};

export default Community;
