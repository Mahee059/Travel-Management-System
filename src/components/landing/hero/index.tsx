import heroImg from "../../../assets/hero.jpg";
import Filter from "../home-filter";

const Hero = () => {
  return (
    <div className="w-full min-h-[70vh] sm:min-h-[85vh] lg:min-h-[90vh] relative">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-20"></div>

      {/* Background Image */}
      <div className="h-full w-full">
        <img
          src={heroImg}
          alt="Hero"
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* Content / CTA */}
      <div className="absolute inset-0 flex justify-center items-center z-30 px-3 sm:px-6 md:px-10">
        <div className="flex flex-col items-center max-w-4xl text-center">
          {/* Heading */}
          <h1 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-snug sm:leading-tight md:leading-tight">
            Discover Your Next Adventure
          </h1>

          {/* Subtitle */}
          <p className="mt-3 text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl text-gray-200 max-w-md sm:max-w-xl md:max-w-2xl">
            Book flights, hotels, tours & more with ease
          </p>

          {/* Filter Section */}
          <div className="flex justify-center w-full mt-3 sm:mt-6 md:mt-8 px-2">
            <Filter />
          </div>

          {/* CTA Button */}
          <button className="mt-4 sm:mt-6 md:mt-9 text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-white bg-emerald-700 hover:bg-emerald-800 transition-colors duration-200 px-4 sm:px-6 md:px-9 py-2 sm:py-3 md:py-4 rounded-lg shadow-md w-full sm:w-fit max-w-xs">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
