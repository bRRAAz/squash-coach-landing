import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import BenefitsSection from "@/components/BenefitsSection";
import AuthoritySection from "@/components/AuthoritySection";
import MethodologySection from "@/components/MethodologySection";
import TransformationSection from "@/components/TransformationSection";
import TrialSection from "@/components/TrialSection";
import CtaSection from "@/components/CtaSection";
import WhatsAppFab from "@/components/WhatsAppFab";

const Index = () => {
  return (
    <main>
      <HeroSection />
      {/* <ProblemSection /> */}
      <BenefitsSection />
      <AuthoritySection />
      <MethodologySection />
      <TransformationSection />
      <TrialSection />
      <CtaSection />
      <WhatsAppFab />
    </main>
  );
};

export default Index;
