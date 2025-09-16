
import CTABanner from "../components/landing/CTA Banner";
import Hero from "../components/landing/hero";
import Howitworks from "../components/landing/How it works";
import PopularDestinations from "../components/landing/Popular-destinations";
import SpecialOfferBanner from "../components/landing/Special Offer Banner";
import WhyChooseUs from "../components/landing/why Choose Us";



const LandingPage = () => {
  return (
    <main className="w-full h-full">
      <Hero />
      <PopularDestinations />
      <WhyChooseUs />
      <Howitworks />
      <SpecialOfferBanner />
      <CTABanner />
      
    </main>
  );
};

export default LandingPage;
