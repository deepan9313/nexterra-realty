
export default function About() {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Hero Section */}
      <section className="bg-[#071B3B] text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl md:text-6xl font-bold">
            About Nexterra Realty
          </h1>

          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
            Connecting buyers, sellers, investors and businesses
            with premium real estate opportunities across Coimbatore.
          </p>

        </div>
      </section>

      {/* Our Story */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-4xl font-bold mb-6">
              Our Story
            </h2>

            <p className="text-gray-600 leading-relaxed mb-4">
              Nexterra Realty was founded with a vision to simplify
              real estate transactions and provide a trusted platform
              for property buyers, sellers and investors.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              We focus on verified listings, transparent communication,
              and exceptional customer service to help people make
              confident property decisions.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Whether you are looking for a dream home, investment
              opportunity or commercial space, Nexterra Realty is
              committed to helping you find the perfect property.
            </p>

          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab"
              alt="About Nexterra Realty"
              className="rounded-3xl shadow-2xl"
            />
          </div>

        </div>

      </section>

      {/* Mission & Vision */}
      <section className="bg-white py-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-gray-50 p-8 rounded-3xl shadow">
              <h3 className="text-3xl font-bold text-yellow-500 mb-4">
                Our Mission
              </h3>

              <p className="text-gray-600">
                To provide a reliable and transparent real estate
                platform that simplifies buying, selling and renting
                properties for everyone.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-3xl shadow">
              <h3 className="text-3xl font-bold text-yellow-500 mb-4">
                Our Vision
              </h3>

              <p className="text-gray-600">
                To become Tamil Nadu's most trusted real estate
                marketplace through innovation, trust and customer
                satisfaction.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* Why Choose Us */}
      <section className="py-20">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-12">
            Why Choose Nexterra Realty?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white p-8 rounded-3xl shadow text-center">
              <div className="text-5xl mb-4">🏠</div>

              <h3 className="text-2xl font-bold mb-3">
                Verified Listings
              </h3>

              <p className="text-gray-600">
                Every property is reviewed before publication.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow text-center">
              <div className="text-5xl mb-4">🤝</div>

              <h3 className="text-2xl font-bold mb-3">
                Trusted Service
              </h3>

              <p className="text-gray-600">
                Transparent communication and professional support.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow text-center">
              <div className="text-5xl mb-4">📈</div>

              <h3 className="text-2xl font-bold mb-3">
                Investment Growth
              </h3>

              <p className="text-gray-600">
                Discover high-potential properties and opportunities.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* Statistics */}
      <section className="bg-[#071B3B] text-white py-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-4 gap-8 text-center">

            <div>
              <h3 className="text-5xl font-bold text-yellow-400">
                500+
              </h3>

              <p className="mt-2">
                Properties Listed
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-yellow-400">
                100+
              </h3>

              <p className="mt-2">
                Happy Clients
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-yellow-400">
                50+
              </h3>

              <p className="mt-2">
                Verified Agents
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-yellow-400">
                10+
              </h3>

              <p className="mt-2">
                Years Experience
              </p>
            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

