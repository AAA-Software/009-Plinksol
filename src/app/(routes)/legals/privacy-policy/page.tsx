import Footer from "@/components/sections/footer";
import LegalsNavbar from "@/components/sections/legals-navbar";
import PrivacyPolicyContent from "@/components/sections/privacy-policy";
import PrivacyPolicyHero from "@/components/sections/privacy-policy-hero";

const PrivacyPolicy = () => {
  return (
    <div>
      <LegalsNavbar />
      <PrivacyPolicyHero />
      <PrivacyPolicyContent />
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
