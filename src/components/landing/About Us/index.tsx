import React from "react";
import { MapPin, Users, Award, Heart } from "lucide-react";

const AboutUs: React.FC = () => {
  const stats = [
    { icon: MapPin, label: "Destinations", value: "200+" },
    { icon: Users, label: "Happy Customers", value: "50K+" },
    { icon: Award, label: "Awards Won", value: "25+" },
    { icon: Heart, label: "Years Experience", value: "15+" },
  ];

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      image:
        "https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
    },
    {
      name: "Michael Chen",
      role: "Travel Director",
      image:
        "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
    },
    {
      name: "Emma Davis",
      role: "Customer Relations",
      image:
        "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-emerald-700 text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div
          className="relative min-h-96 flex items-center justify-center"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=1600&h=600&fit=crop)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="text-center px-4">
            <h1 className="text-5xl font-bold mb-4">About Us</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Creating unforgettable travel experiences for over 15 years
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Our Story */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-lg text-gray-700 mb-6">
              Founded in 2009, our travel company began with a simple mission:
              to make extraordinary travel experiences accessible to everyone.
              What started as a small local agency has grown into a trusted
              global travel partner.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              We believe that travel has the power to transform lives, broaden
              perspectives, and create lasting memories. Our team of passionate
              travel experts works tirelessly to craft personalized journeys
              that exceed expectations.
            </p>
            <p className="text-lg text-gray-700">
              From exotic destinations to cultural immersions, adventure
              expeditions to luxury escapes, we handle every detail so you can
              focus on what matters most – enjoying your journey.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/1141853/pexels-photo-1141853.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
              alt="Travel planning"
              className="rounded-lg shadow-xl w-full h-80 object-cover"
            />
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Achievements
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <IconComponent className="w-12 h-12 text-emerald-600" />
                  </div>
                  <div className="text-3xl font-bold text-emerald-600 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Meet Our Team
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 text-center">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h4>
                  <p className="text-emerald-600 font-medium">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-emerald-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-emerald-900 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-700">
              To provide exceptional travel experiences that inspire, educate,
              and connect people with the world's diverse cultures and natural
              wonders while promoting sustainable and responsible tourism.
            </p>
          </div>
          <div className="bg-blue-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              Our Vision
            </h3>
            <p className="text-gray-700">
              To be the world's most trusted travel partner, recognized for our
              commitment to excellence, sustainability, and creating
              transformative journeys that leave a positive impact on both
              travelers and destinations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
