import About from "@/components/sections/about";
import Community from "@/components/sections/community";
import Faq from "@/components/sections/faq";
import Footer from "@/components/sections/footer";
import Hero from "@/components/sections/hero";
import Navbar from "@/components/sections/navbar";
import PlinkSolCoin from "@/components/sections/plinksol-coin";
import Presale from "@/components/sections/presale";
import Roadmap from "@/components/sections/roadmap";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <PlinkSolCoin />
      <Presale />
      <Roadmap />
      <Faq />
      <Community />
      <Footer />
    </div>
  );
};

export default LandingPage;
