
import {
  MapPin,
  Clock,
  Award,
  Plane,
  Heart,
  Globe,
  Camera,
  Shield,
  Users,
  CheckCircle,
} from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  delay,
}) => {
  return (
    <div
      className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex flex-col items-center text-center">
        <div className="mb-6 p-4 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl text-white group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-emerald-600 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Expert Local Guides",
      description:
        "Our certified local guides know every hidden gem and secret spot. Experience authentic culture and discover places only locals know about.",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "24/7 Travel Support",
      description:
        "Round-the-clock assistance wherever you are in the world. Emergency support, itinerary changes, and travel guidance anytime you need it.",
    },
    {
      icon: <Plane className="w-8 h-8" />,
      title: "Seamless Planning",
      description:
        "From flights to accommodations, we handle every detail. Enjoy stress-free travel with perfectly coordinated itineraries.",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Award-Winning Service",
      description:
        "Recognized as the top travel agency for 3 consecutive years. Our commitment to excellence speaks for itself.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Group & Solo Travel",
      description:
        "Whether traveling solo or with a group, we create perfect experiences. Specialized packages for families, couples, and adventure seekers.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Safe & Secure",
      description:
        "Travel with confidence knowing you're protected. Comprehensive insurance coverage and safety protocols for worry-free adventures.",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Personalized Experiences",
      description:
        "Every journey is crafted specifically for you. We create unforgettable memories tailored to your interests and preferences.",
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Verified Quality",
      description:
        "All our partners are thoroughly vetted and verified. Only the highest quality accommodations, tours, and services make it to our platform.",
    },
  ];

  const stats = [
    { number: "75,000+", label: "Happy Travelers" },
    { number: "200+", label: "Destinations" },
    { number: "24/7", label: "Travel Support" },
    { number: "20 Years", label: "Travel Expertise" },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-0 left-0 w-72 h-72 bg-emerald-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div
        className="absolute bottom-0 right-0 w-72 h-72 bg-teal-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Globe className="w-4 h-4" />
            Why Choose Us
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            Your Perfect Travel
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              {" "}
              Adventure Awaits
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the world with confidence. We create extraordinary travel
            experiences that turn your dream destinations into unforgettable
            memories.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-4 bg-white/50 rounded-xl backdrop-blur-sm"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                {stat.number}
              </div>
              <div className="text-sm md:text-base text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 mb-16">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 100}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-12 shadow-xl border border-gray-100 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Camera className="w-8 sm:w-10 h-8 sm:h-10 text-emerald-500" />
              <Plane className="w-10 sm:w-12 h-10 sm:h-12 text-emerald-600" />
              <MapPin className="w-8 sm:w-10 h-8 sm:h-10 text-emerald-500" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
              Ready for Your Next Adventure?
            </h3>
            <p className="text-gray-600 mb-6 sm:mb-8 text-base sm:text-lg max-w-2xl mx-auto px-4">
              Join thousands of travelers who've discovered the world with us.
              Let's plan your perfect getaway and create memories that last a
              lifetime.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base">
                Plan My Trip
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:border-emerald-500 hover:text-emerald-600 transition-all duration-300 bg-white hover:bg-emerald-50 text-sm sm:text-base">
                View Packages
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
