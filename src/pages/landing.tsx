import NavBar from "../components/header"
import Hero from "../components/landing/hero" 
import Popular from "../components/landing/Popular-destinations" 
import WhyChoooseUs from "../components/landing/why Choose Us"
import Howitworks from "../components/landing/How it works" 
import SpecialOfferBanner from "../components/landing/Special Offer Banner"; 
import CTABanner from "../components/landing/CTA Banner"



 const LandingPage = () => {
  return (
    <main className="w-full h-full">
      <NavBar />
      <Hero />
      <Popular />
      <WhyChoooseUs />
      <Howitworks />
      <SpecialOfferBanner />
      <CTABanner /> 
      
    </main>
  );
}
 export default LandingPage 