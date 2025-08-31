import NavBar from "../components/header"
import Hero from "../components/landing/hero" 
import Popular from "../components/landing/Popular" 
 import WhyChoooseUs from "../components/landing/why Choose Us"

 const LandingPage = () => {
  return (
      <main className="w-full h-full">  
      <NavBar />
      <Hero /> 
      <Popular />
      <WhyChoooseUs />
      
          
      </main>
      
  )
}
 export default LandingPage 