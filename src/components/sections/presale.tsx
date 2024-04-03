import Image from "next/image";
import PresaleTextSvg from "../svg/presale-text";
import Countdown from "../ui/countdown";
import PresaleCalculator from "../ui/presale-calculator";

const Presale = () => {
  return (
    <div id="presale" className=" w-full ">
      <div className=" pt-[15rem]" />
      <div className="w-full flex flex-col items-center">
        <div className=" relative flex items-center flex-col w-full">
          <PresaleTextSvg />
          <h2 className=" font-sora text-5xl md:text-6xl font-bold text-white text-center absolute top-14">
            Presale Details
          </h2>
        </div>
        <div className="hidden md:block">
          <div className="flex flex-row items-center gap-5 mt-20">
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

            <h3 className=" font-sora text-2xl font-medium text-white">
              Time to Presale
            </h3>

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
        </div>
        <div className=" md:hidden w-full mt-10">
          <div className="flex flex-row items-center w-full justify-center">
            <div className=" relative h-[3px] w-[50px]">
              <Image fill src="/img/left.png" alt="Line" />
            </div>

            <div className="ml-4 mr-2">
              <h4 className=" font-sora text-xl font-medium text-white">
                Time to Presale
              </h4>
            </div>

            <div className=" relative h-[3px] w-[50px]">
              <Image fill src="/img/left.png" alt="Line" />
            </div>
          </div>
        </div>
        <div className="py-5 md:py-10">
          <Countdown />
        </div>

        <p className=" text-base font-sora text-white/70 max-w-full md:max-w-2xl text-center mt-4">
          The PlinkoSol presale will be available for a limited time only. Stay
          tuned for announcements regarding the start and end dates of the
          presale period.
        </p>

        <h3 className=" font-sora text-2xl font-medium text-white mt-10">
          Participation Requirements
        </h3>
        <p className=" text-base font-sora text-white/70 max-w-full md:max-w-2xl text-center mt-2">
          Participating in the PlinkoSol presale is open to anyone interested in
          securing PlinkoSol coins before the official launch of the platform.
          Simply follow the instructions provided on our presale page to
          participate.
        </p>

        <PresaleCalculator />

        <h3 className=" font-sora text-2xl font-medium text-white mt-2 md:mt-10">
          Discounted Rates
        </h3>
        <p className=" text-base font-sora text-white/70 max-w-full md:max-w-2xl text-center mt-2">
          During the presale period, PlinkoSol coins will be available at a
          special discounted rate. Take advantage of this opportunity to
          purchase PlinkoSol coins at a lower price than the standard rate.
        </p>

        <h3 className=" font-sora text-2xl font-medium text-white mt-10">
          Allocation of PlinkoSol Coins
        </h3>
        <p className=" text-base font-sora text-white/70 max-w-full md:max-w-2xl text-center mt-2">
          PlinkoSol presale participants will have the opportunity to purchase a
          predetermined allocation of PlinkoSol coins. This allocation will be
          based on the amount of cryptocurrency contributed during the presale.
        </p>
      </div>
    </div>
  );
};

export default Presale;
