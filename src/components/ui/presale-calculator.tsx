import Image from "next/image";
import { Button } from "./button";
import { Progress } from "./progress";

const PresaleCalculator = () => {
  return (
    <div className="mt-20 mb-20 w-[450px]">
      <div className=" flex flex-col items-center w-full">
        <div className="bg-[#59B22B] w-fit rounded-full py-2 z-10 px-6">
          <p className="text-black font-sora text-lg font-medium">
            1 PlinkSol = $ 0.526 USD
          </p>
        </div>
        <div className="relative shrink-0 bg-[#141826] -mt-6 rounded-2xl w-[450px] h-[425px] py-10 px-8">
          <p className="mt-1.5 text-xl font-medium font-sora text-[#59B22B]">
            Join PlinkSol Presale
          </p>
          <p className="text-base text-white/70 font-sora font-normal text-white">
            You&apos;ll be redirected to a secure checkout page where you can
            finalize purchase.
          </p>

          <div className="flex flex-col w-full mt-4">
            <Progress className="h-2" value={5} />
            <div className="w-full flex py-3 flex-row justify-between text-white font-sora font-normal">
              <h4 className=" opacity-70">USD Raised</h4>
              <p>$ 1,000</p>
            </div>
          </div>

          <div className="w-full h-32 border border-white/10 rounded-xl"></div>

          <Button className="w-full py-6 mt-6">Proceed to Checkout</Button>
        </div>
        <div className=" border-dashed border-t border-t-white/15 w-[90%]" />
        <div className="bg-[#141826] rounded-2xl flex items-center justify-center py-4 h-20 w-full">
          <div className=" relative w-full h-[32px] hover:scale-110 transition-all ease-in-out">
            <Image
              fill
              quality={100}
              src="/img/coins.png"
              className=" object-contain object-center"
              alt="Crypto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PresaleCalculator;
