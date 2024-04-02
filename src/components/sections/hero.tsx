import Image from "next/image";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <div id="home" className=" w-full h-screen relative">
      <div className="relative w-full h-full">
        <Image
          className=" object-contain"
          fill
          src="/img/hero-backdrop.png"
          alt="Backdrop"
        />
      </div>

      <div className="flex flex-col items-center w-full absolute top-20 z-10">
        <div className="flex flex-row items-center gap-5">
          <svg
            width="110"
            height="5"
            viewBox="0 0 110 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              y="0.535156"
              width="110"
              height="4"
              rx="2"
              fill="url(#paint0_linear_168_174)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_168_174"
                x1="0"
                y1="2.53516"
                x2="110"
                y2="2.53516"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.225" stop-color="#63CA2D" stop-opacity="0" />
                <stop offset="1" stop-color="#63CA2D" />
              </linearGradient>
            </defs>
          </svg>

          <h4 className=" font-sora text-base uppercase font-medium text-[#63CA2D]">
            INTRODUCTION TO PLINKOSOL
          </h4>

          <svg
            width="110"
            height="5"
            viewBox="0 0 110 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="110"
              height="4"
              rx="2"
              transform="matrix(-1 0 0 1 110 0.535156)"
              fill="url(#paint0_linear_168_174)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_168_174"
                x1="0"
                y1="2"
                x2="110"
                y2="2"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.225" stop-color="#63CA2D" stop-opacity="0" />
                <stop offset="1" stop-color="#63CA2D" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <h1 className=" font-sora text-7xl font-bold text-white text-center">
          Welcome to
          <br /> <span className="text-[#63CA2D]">Plinksol</span> Presale
        </h1>
        <p className=" text-base font-sora text-white/70 max-w-2xl text-center mt-4">
          Discover the future of online gaming with PlinkoSol – the platform
          that brings the excitement of Plinko to the blockchain. Experience the
          thrill of playing Plinko online, backed by the security and
          transparency of blockchain technology.
        </p>

        <div className=" flex flex-row items-center gap-4 mt-6">
          <Button>Join Presale Now</Button>
          <Button variant={"outline"}>Learn More</Button>
        </div>
      </div>

      <div className=" absolute bottom-20 w-full h-full">
        <div className="relative w-full h-full">
          <Image
            className=" object-contain"
            fill
            quality={100}
            src="/img/hero-banner.png"
            alt="Backdrop"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
