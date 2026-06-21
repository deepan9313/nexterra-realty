const properties = [
  {
    title: "Luxury Villa in RS Puram",
    price: "₹1.25 Cr",
    location: "RS Puram, Coimbatore",
    beds: 4,
    baths: 4,
    area: "3200 Sq.ft",
  },
  {
    title: "Premium Apartment",
    price: "₹85 L",
    location: "Race Course, Coimbatore",
    beds: 3,
    baths: 3,
    area: "1650 Sq.ft",
  },
  {
    title: "Modern Villa",
    price: "₹98 L",
    location: "Saravanampatti",
    beds: 3,
    baths: 3,
    area: "2400 Sq.ft",
  },
  {
    title: "East Facing Plot",
    price: "₹42 L",
    location: "Vadavalli",
    beds: 0,
    baths: 0,
    area: "2400 Sq.ft",
  },
];

export default function FeaturedProperties() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex justify-between items-center mb-10">
          <h2 className="text-4xl font-bold">
            Featured Properties
          </h2>

          <button className="text-yellow-500 font-semibold">
            View All
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {properties.map((property) => (
            <div
              key={property.title}
              className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-2xl transition"
            >
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
                alt={property.title}
                className="h-56 w-full object-cover"
              />

              <div className="p-5">

                <p className="text-yellow-600 font-bold text-xl">
                  {property.price}
                </p>

                <h3 className="font-bold mt-2">
                  {property.title}
                </h3>

                <p className="text-gray-500 text-sm mt-1">
                  {property.location}
                </p>

                <div className="flex justify-between mt-4 text-sm text-gray-600">
                  <span>{property.beds} Beds</span>
                  <span>{property.baths} Baths</span>
                  <span>{property.area}</span>
                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}