import hero from "../../../assets/hero.jpg";

const Hero = () => {
  return (
    <div className="w-full h-[89vh] relative">
      {/* overlay */}
      <div className="bg-black/45  absolute z-50  inset-0"></div>

      {/* image */}
      <div className="h-full z-10">
        <img src={hero} alt="Hero image" className="h-full w-full" />
      </div>
    </div>
  );
};

export default Hero;
