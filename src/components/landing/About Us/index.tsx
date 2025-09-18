// src/pages/AboutUs.tsx


const AboutUs = () => {
  const galleryImages = [
    "https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    "https://images.pexels.com/photos/21014/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    "https://images.pexels.com/photos/237272/pexels-photo-237272.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    "https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    "https://images.pexels.com/photos/301599/pexels-photo-301599.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
  ];

  return (
    <div className="min-h-screen bg-emerald-50 flex flex-col items-center px-4 py-12">
      <div className="max-w-5xl bg-white rounded-2xl shadow-lg p-8 md:p-12 w-full">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-emerald-600 text-center mb-6">
          About Us
        </h1>

        {/* Intro */}
        <p className="text-gray-700 text-lg text-center max-w-3xl mx-auto mb-10 leading-relaxed">
          Welcome to{" "}
          <span className="font-semibold text-emerald-600">TravelHub</span>,
          where journeys begin with a dream and end with unforgettable memories.
          We are more than just a travel management system — we are your trusted
          companion in discovering new places, cultures, and experiences. 🌍✨
        </p>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left side - Story */}
          <div className="space-y-5">
            <h2 className="text-xl font-semibold text-gray-800">Our Story</h2>
            <p className="text-gray-600 leading-relaxed">
              TravelHub was founded with a simple idea: making travel planning
              easy, reliable, and enjoyable. From local getaways to
              international adventures, we believe every journey deserves to be
              stress-free and magical. Our team works tirelessly to provide the
              best routes, deals, and support so that you can focus on what
              matters — the experience.
            </p>
          </div>

          {/* Right side - Mission */}
          <div className="space-y-5">
            <h2 className="text-xl font-semibold text-gray-800">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              We aim to empower travelers with the tools and support they need
              to explore the world with confidence. Whether it’s booking a quick
              flight, planning a family holiday, or organizing a corporate trip,
              our mission is to simplify every step of your travel journey. ✈️
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mt-12">
          <h2 className="text-xl font-semibold text-gray-800 text-center mb-6">
            What We Value
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-6 bg-emerald-100 rounded-xl shadow-sm">
              <h3 className="font-semibold text-emerald-700">Trust</h3>
              <p className="text-gray-600 text-sm mt-2">
                Your safety and trust are our top priority.
              </p>
            </div>
            <div className="p-6 bg-emerald-100 rounded-xl shadow-sm">
              <h3 className="font-semibold text-emerald-700">Convenience</h3>
              <p className="text-gray-600 text-sm mt-2">
                Easy booking, transparent prices, and 24/7 support.
              </p>
            </div>
            <div className="p-6 bg-emerald-100 rounded-xl shadow-sm">
              <h3 className="font-semibold text-emerald-700">Experience</h3>
              <p className="text-gray-600 text-sm mt-2">
                We help you create stories worth remembering.
              </p>
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="mt-16 mb-12">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Places We’ve Explored 🌍
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {galleryImages.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            ))}
          </div>
        </div>

        {/* Closing Note */}
        <p className="text-gray-700 text-center mt-12 text-lg leading-relaxed">
          At <span className="font-semibold text-emerald-600">TravelHub</span>,
          we don’t just book trips, we build experiences that last a lifetime.
          Let’s make your next journey unforgettable. 🌏💚
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
