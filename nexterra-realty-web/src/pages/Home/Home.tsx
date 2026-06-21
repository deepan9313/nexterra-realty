
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../../components/layout/Navbar";
import PopularLocations from "../../components/home/PopularLocations";
import FeaturedProperties from "../../components/home/FeaturedProperties";
import WhyInvest from "../../components/home/WhyInvest";
import Testimonials from "../../components/home/Testimonials";
import Footer from "../../components/layout/Footer";

const Home = () => {
  const navigate = useNavigate();

  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [budget, setBudget] = useState("");

  const handleSearch = () => {
    navigate(
      `/listings?location=${location}&type=${propertyType}&budget=${budget}`
    );
  };

  return (
    <>
      <Navbar />

      <section
        className="h-screen bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 flex flex-col justify-center h-full max-w-7xl mx-auto px-6 pt-24 md:pt-0">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white max-w-3xl">
            Discover Premium Properties Across
            <span className="text-yellow-400">
              {" "}Coimbatore
            </span>
          </h1>

          <p className="text-gray-300 mt-6 text-xl max-w-2xl">
            Find villas, apartments, plots, and commercial
            spaces in the most sought-after locations.
          </p>

          <div className="bg-white rounded-2xl p-6 mt-10 max-w-5xl shadow-2xl">
            <div className="grid md:grid-cols-5 gap-4">

              <input
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="border p-3 rounded-lg"
                placeholder="Location"
              />

              <input
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                className="border p-3 rounded-lg"
                placeholder="Property Type"
              />

              <input
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="border p-3 rounded-lg"
                placeholder="Budget"
              />

              <button
                onClick={handleSearch}
                className="bg-yellow-400 rounded-lg font-semibold"
              >
                Search Properties
              </button>

              <button
                onClick={() => navigate("/map-search")}
                className="bg-[#071B3B] text-white rounded-lg font-semibold"
              >
                📍 Search on Map
              </button>

            </div>
          </div>
        </div>
      </section>

      <PopularLocations />
      <FeaturedProperties />
      <WhyInvest />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Home;

