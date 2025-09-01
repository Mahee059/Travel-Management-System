
import {
  Search,
  Calendar,
  CreditCard,
  MapPin,
  Bell,
  Shield,
  Plane,
} from "lucide-react";

const Howitworks = () => {
  const steps = [
    {
      id: 1,
      icon: <Search className="w-8 h-8" />,
      title: "Search & Discover",
      description:
        "Browse thousands of destinations, hotels, and activities. Use our smart filters to find exactly what you're looking for.",
      color: "from-emerald-400 to-emerald-600",
    },
    {
      id: 2,
      icon: <Calendar className="w-8 h-8" />,
      title: "Plan Your Journey",
      description:
        "Create detailed itineraries with our intuitive planning tools. Add dates, locations, and activities to build your perfect trip.",
      color: "from-emerald-500 to-emerald-700",
    },
    {
      id: 3,
      icon: <CreditCard className="w-8 h-8" />,
      title: "Secure Booking",
      description:
        "Book flights, hotels, and activities with confidence. Our secure payment system protects your information.",
      color: "from-emerald-600 to-emerald-800",
    },
    {
      id: 4,
      icon: <Bell className="w-8 h-8" />,
      title: "Real-time Updates",
      description:
        "Receive instant notifications about flight changes, weather updates, and important travel information.",
      color: "from-emerald-400 to-emerald-600",
    },
    {
      id: 5,
      icon: <MapPin className="w-8 h-8" />,
      title: "Navigate with Ease",
      description:
        "Access offline maps, local recommendations, and GPS navigation to explore your destination confidently.",
      color: "from-emerald-500 to-emerald-700",
    },
    {
      id: 6,
      icon: <Shield className="w-8 h-8" />,
      title: "Travel Protection",
      description:
        "Enjoy peace of mind with comprehensive travel insurance and 24/7 customer support wherever you go.",
      color: "from-emerald-600 to-emerald-800",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-slate-50 to-emerald-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full mb-6">
            <Plane className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            How It{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-emerald-700">
              Works
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience seamless travel management from planning to return. Our
            comprehensive platform simplifies every aspect of your journey.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className="group relative bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-emerald-100"
            >
              {/* Step Number */}
              <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm shadow-lg">
                {step.id}
              </div>

              {/* Icon */}
              <div
                className={`inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r ${step.color} rounded-xl mb-4 sm:mb-6 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
              >
                {step.icon}
              </div>

              {/* Content */}
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4 group-hover:text-emerald-600 transition-colors duration-300">
                {step.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {step.description}
              </p>

              {/* Connecting Line (hidden on mobile) */}
              {index < steps.length - 1 && index % 3 !== 2 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-emerald-300 to-emerald-400 transform -translate-y-1/2 z-10"></div>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl p-6 sm:p-8 md:p-12 text-white shadow-2xl">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-emerald-100 mb-6 sm:mb-8 text-base sm:text-lg max-w-2xl mx-auto px-4">
              Join thousands of travelers who trust our platform for their
              adventures. Create your account today and experience the
              difference.
            </p>
            <button className="bg-white text-emerald-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:bg-emerald-50 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Howitworks;
