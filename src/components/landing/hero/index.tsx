import hero from "../../../assets/hero.jpg";
import Filter from "../home-filter";

const Hero = () => {
  return (
    <div className="w-full h-[89vh] relative">
      {/* overlay */}
      <div className="bg-black/60 absolute z-50  inset-0"></div>

      {/* image */}
      <div className="h-full z-10">
        <img src={hero} alt="Hero image" className="h-full w-full" />
      </div> 

       {/* CTA */}
      <div className="absolute inset-0 flex justify-center items-center z-50">  
         <div className="flex flex-col items-center map-2">
        <h1 className="text-5xl text-[#f8f8f8] font-bold"> Discover Your Next Adventure</h1> 
          <p className="text-white text-lg text-center mt-2" >Book flights, hotels, hours & more with ease</p> 
          <div className="flex justify-center my-2"> 
             <Filter/>
          </div>  
        <button className=" mt-4 text-lg font-bold text-white w-ft- mx-auto auto bg-emerald-700 py-3 px-8 rounded-md">Book Now</button>
      </div> 
      </div>
    </div> 
  
  );
};

export default Hero;
