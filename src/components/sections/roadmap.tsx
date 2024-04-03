import Image from "next/image";
import RoadmapTextSvg from "../svg/roadmap-text";
import Wrapper from "../wrapper/wrapper";

const Roadmap = () => {
  return (
    <div id="roadmap" className=" w-full ">
      <div className="pt-[12rem] md:pt-[10rem]" />
      <div className="w-full flex flex-col items-center">
        <div className=" relative flex items-center flex-col">
          <RoadmapTextSvg />
          <h2 className=" font-sora text-5xl md:text-6xl font-bold text-white text-center absolute top-14">
            Roadmap
          </h2>
        </div>
        <div className="mt-10 md:mt-[6rem]" />

        <div className="relative w-full h-[32px] md:h-[50px]">
          <Image
            className=" object-cover md:object-contain"
            fill
            quality={100}
            src="/img/wavy-line.png"
            alt="Wavy line"
          />
        </div>
        <div className=" mt-[2rem]" />

        <Wrapper className=" max-w-full md:max-w-screen-2xl py-20">
          <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
            <div className="transition-transform hover:-translate-y-1 cursor-pointer w-full">
              <div className="relative shrink-0 bg-[#141826] rounded-2xl h-[340px] py-8 w-full px-8">
                <p className="mt-1.5 text-lg font-medium font-sora text-white">
                  Phase-1
                </p>
                <p className="mt-1.5 text-2xl font-medium font-sora text-[#59B22B]">
                  Q3 2022
                </p>
                <div className="flex flex-row items-start gap-4 mt-4">
                  <Image
                    width={20}
                    quality={100}
                    height={20}
                    src="/img/asterisk.png"
                    alt="Asterisk"
                  />
                  <p className="text-base font-normal font-sora text-white">
                    Platform design finalization, initial development &
                    documentation
                  </p>
                </div>
                <div className="flex flex-row items-start gap-4 mt-4">
                  <Image
                    width={20}
                    quality={100}
                    height={20}
                    src="/img/asterisk.png"
                    alt="Asterisk"
                  />
                  <p className="text-base font-normal font-sora text-white">
                    Plinko game enhancement, introducing new game modes,
                    improving graphics and animations and adding features to
                    make game more exciting
                  </p>
                </div>
              </div>
              <div className=" border-dashed border-t border-t-white/15 ml-4 w-[95%]" />
              <div className="bg-[#141826] rounded-t-2xl flex items-center justify-center h-16">
                <p className="text-xl text-white font-sora">{""}</p>
              </div>
            </div>

            <div className="transition-transform hover:-translate-y-1 cursor-pointer w-full">
              <div className="relative shrink-0 bg-[#141826] rounded-2xl h-[340px] py-8 w-full px-8">
                <p className="mt-1.5 text-lg font-medium font-sora text-white">
                  Phase-2
                </p>
                <p className="mt-1.5 text-2xl font-medium font-sora text-[#59B22B]">
                  Q2 2023
                </p>
                <div className="flex flex-row items-start gap-4 mt-4">
                  <Image
                    width={20}
                    quality={100}
                    height={20}
                    src="/img/asterisk.png"
                    alt="Asterisk"
                  />
                  <p className="text-base font-normal font-sora text-white">
                    Expansion to new games. We&apos;re committed to expanding
                    beyond Plinko and introducing new games to the platform
                  </p>
                </div>
                <div className="flex flex-row items-start gap-4 mt-4">
                  <Image
                    width={20}
                    quality={100}
                    height={20}
                    src="/img/asterisk.png"
                    alt="Asterisk"
                  />
                  <p className="text-base font-normal font-sora text-white">
                    Leverage blockchain technology to enhance the functionality
                    and security of the platform
                  </p>
                </div>
              </div>
              <div className=" border-dashed border-t border-t-white/15 ml-4 w-[95%]" />
              <div className="bg-[#141826] rounded-t-2xl flex items-center justify-center h-16">
                <p className="text-xl text-white font-sora">{""}</p>
              </div>
            </div>

            <div className="transition-transform hover:-translate-y-1 cursor-pointer w-full">
              <div className="relative shrink-0 bg-[#141826] rounded-2xl h-[340px] py-8 w-full px-8">
                <p className="mt-1.5 text-lg font-medium font-sora text-white">
                  Phase-3
                </p>
                <p className="mt-1.5 text-2xl font-medium font-sora text-[#59B22B]">
                  Q2 2024
                </p>
                <div className="flex flex-row items-start gap-4 mt-4">
                  <Image
                    width={20}
                    quality={100}
                    height={20}
                    src="/img/asterisk.png"
                    alt="Asterisk"
                  />
                  <p className="text-base font-normal font-sora text-white">
                    Form strategic partnerships with other projects, developers,
                    and gaming platforms to expand reach, access new markets and
                    bring additional value to users
                  </p>
                </div>
                <div className="flex flex-row items-start gap-4 mt-4">
                  <Image
                    width={20}
                    quality={100}
                    height={20}
                    src="/img/asterisk.png"
                    alt="Asterisk"
                  />
                  <p className="text-base font-normal font-sora text-white">
                    Become leading platform for blockchain-based gaming
                    worldwide.
                  </p>
                </div>
              </div>
              <div className=" border-dashed border-t border-t-white/15 ml-4 w-[95%]" />
              <div className="bg-[#141826] rounded-t-2xl flex items-center justify-center h-16">
                <p className="text-xl text-white font-sora">{""}</p>
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
    </div>
  );
};

export default Roadmap;
