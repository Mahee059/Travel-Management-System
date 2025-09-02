const CTABanner = () => {
  return (
    <section className="relative bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-2xl overflow-hidden p-6 sm:p-10 md:p-16 my-10 shadow-lg">
      {/* Decorative Background Circles */}
      <div className="absolute top-0 left-0 w-32 h-32 sm:w-40 sm:h-40 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-56 h-56 sm:w-72 sm:h-72 bg-white/5 rounded-full blur-2xl"></div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Text Section */}
        <div className="text-center md:text-left max-w-lg">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            Ready for Your Next Adventure?
          </h2>
          <p className="text-white/90 text-sm sm:text-base md:text-lg mb-4 sm:mb-6">
            Discover amazing destinations and enjoy exclusive deals. Book your
            trip now and start your journey with confidence!
          </p>
          <button className="bg-emerald-100 text-emerald-700 font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-xl shadow-lg hover:bg-emerald-200 hover:scale-105 transition-all duration-300 text-sm sm:text-base">
            Plan My Trip
          </button>
        </div>

        {/* Icon Section */}
        <div className="flex items-center justify-center gap-4 mt-4 md:mt-0">
          {/* Plane Icon */}
          <svg
            className="w-12 h-12 sm:w-16 sm:h-16 text-emerald-100 animate-bounce"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M2.5 19.5l19-8.5-19-8.5v7l14 1-14 1v7z"
            />
          </svg>
          {/* Location Pin Icon */}
          <svg
            className="w-8 h-8 sm:w-12 sm:h-12 text-emerald-200"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 11c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 22s8-8.5 8-13-3.582-7-8-7-8 3.582-8 7 8 13 8 13z"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
