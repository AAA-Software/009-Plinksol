import CoinTextSvg from "../svg/coint-text";
import Carousel from "../ui/purpose-carousel";

const PlinkSolCoin = () => {
  return (
    <div id="plinksol-coin" className="w-full">
      <div className=" pt-[15rem]" />
      <div className="w-full flex flex-col items-center">
        <div className=" relative flex items-center flex-col">
          <CoinTextSvg />
          <h2 className=" font-sora text-6xl font-bold text-white text-center absolute top-14">
            About Coin
          </h2>
        </div>

        <p className=" text-base font-sora text-white/70 max-w-3xl text-center mt-8">
          Discover the power of the PlinkoSol coin – the backbone of the
          PlinkoSol platform. With PlinkoSol coin, you can enjoy faster
          transactions, lower fees, and enhanced privacy while playing Plinko
          online.
        </p>
      </div>
      <div className=" mt-[4rem]" />

      <Carousel />
    </div>
  );
};

export default PlinkSolCoin;
