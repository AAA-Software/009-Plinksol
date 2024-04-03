import Footer from "@/components/sections/footer";
import LegalsNavbar from "@/components/sections/legals-navbar";
import PrivacyPolicyContent from "@/components/sections/privacy-policy";
import Terms from "@/components/sections/terms";
import TermsOfServiceHero from "@/components/sections/terms-of-service-hero";

const TermsOfService = () => {
  return (
    <div>
      <LegalsNavbar />
      <TermsOfServiceHero />
      <Terms />
      <Footer />
    </div>
  );
};

export default TermsOfService;
