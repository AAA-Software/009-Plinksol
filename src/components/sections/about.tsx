import AboutSvg from "../svg/about-text";

const About = () => {
  return (
    <div id="about" className=" w-full ">
      <div className=" pt-10 md:pt-[15rem]" />
      <div className="w-full flex flex-col items-center">
        <div className=" relative flex items-center flex-col">
          <AboutSvg />
          <h2 className=" font-sora text-5xl md:text-6xl font-bold text-white text-center absolute top-14">
            What is Plinko
          </h2>
        </div>

        <p className=" text-base font-sora text-white/70 max-w-3xl text-center mt-8">
          Plinko is a classic casino game where players drop a ball onto a
          pegged board, watching as it bounces and falls into various prize
          slots. With its simple yet addictive gameplay, Plinko has been a
          favorite among casino enthusiasts for decades. Now, PlinkoSol brings
          this timeless game into the digital age, offering a seamless and
          entertaining gaming experience for players around the world.
        </p>

        <video
          autoPlay
          loop
          muted
          className="w-[1080px] h-fit rounded-2xl border border-white/5 mt-10"
        >
          <source src="/vid/demo.mp4" />
        </video>
      </div>
    </div>
  );
};

export default About;
