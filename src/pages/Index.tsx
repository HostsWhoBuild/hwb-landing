import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import WhoIsThisFor from "@/components/WhoIsThisFor";
import Benefits from "@/components/Benefits";
import HowItWorks from "@/components/HowItWorks";
import CommunityCTA from "@/components/CommunityCTA";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <SocialProof />
      <WhoIsThisFor />
      <Benefits />
      <HowItWorks />
      <CommunityCTA />
      <Services />
      <Footer />
    </main>
  );
};

export default Index;
