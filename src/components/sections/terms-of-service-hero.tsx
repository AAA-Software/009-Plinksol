import Image from "next/image";

const TermsOfServiceHero = () => {
  return (
    <div className="flex flex-col h-fit">
      <div className=" w-full h-screen relative">
        <div className="relative w-full h-full">
          <Image
            className=" object-cover md:object-contain"
            fill
            src="/img/hero-backdrop.png"
            alt="Backdrop"
          />
        </div>

        <div className="flex flex-col items-center w-full absolute top-14 md:top-20 z-10">
          <div className=" md:hidden w-full">
            <div className="flex flex-row items-center w-full justify-center">
              <div className=" relative h-[3px] w-[50px]">
                <Image fill src="/img/left.png" alt="Line" />
              </div>

              <div className="ml-4 mr-2">
                <h4 className=" font-sora text-base uppercase font-medium text-[#63CA2D]">
                  Legals Page
                </h4>
              </div>

              <div className=" relative h-[3px] w-[50px]">
                <Image fill src="/img/left.png" alt="Line" />
              </div>
            </div>
          </div>

          <div className=" hidden md:block">
            <div className="flex flex-row items-center gap-2 md:gap-5">
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
                    <stop
                      offset="0.225"
                      stop-color="#63CA2D"
                      stop-opacity="0"
                    />
                    <stop offset="1" stop-color="#63CA2D" />
                  </linearGradient>
                </defs>
              </svg>

              <h4 className=" font-sora text-base uppercase font-medium text-[#63CA2D] w-fit">
                Legals Page
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
                    <stop
                      offset="0.225"
                      stop-color="#63CA2D"
                      stop-opacity="0"
                    />
                    <stop offset="1" stop-color="#63CA2D" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          <h1 className=" font-sora text-5xl md:text-7xl font-bold text-white text-center mt-2 md:mt-3">
            Terms Of Service
          </h1>
          <p className=" text-base font-sora text-white/70 max-w-full px-0.5 md:px-0 md:max-w-xl text-center mt-2 md:mt-4">
            Welcome to our website. If you continue to browse and use this
            website, you are agreeing to comply with and be bound by the
            following terms and conditions of use, which together with our
            privacy policy govern our relationship with you in relation to this
            website. If you disagree with any part of these terms and
            conditions, please do not use our website.
          </p>

          <p className=" text-base font-sora text-white/70 max-w-full px-0.5 md:px-0 md:max-w-xl text-center mt-2 md:mt-4">
            The term &apos;us&apos; or &apos;we&apos; refers to the owner of the
            website. The term &apos;you&apos; refers to the user or viewer of
            our website.
          </p>
          <p className=" text-base font-sora text-white/70 max-w-full px-0.5 md:px-0 md:max-w-xl text-center mt-2 md:mt-4">
            The use of this website is subject to the following terms of use:
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfServiceHero;
