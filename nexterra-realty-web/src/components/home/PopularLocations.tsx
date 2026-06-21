const locations = [
  {
    name: "RS Puram",
    properties: "320+ Properties",
    price: "₹7,200 / Sq.ft",
  },
  {
    name: "Race Course",
    properties: "280+ Properties",
    price: "₹8,200 / Sq.ft",
  },
  {
    name: "Peelamedu",
    properties: "210+ Properties",
    price: "₹5,200 / Sq.ft",
  },
  {
    name: "Saravanampatti",
    properties: "190+ Properties",
    price: "₹4,200 / Sq.ft",
  },
  {
    name: "Singanallur",
    properties: "150+ Properties",
    price: "₹4,100 / Sq.ft",
  },
  {
    name: "Vadavalli",
    properties: "150+ Properties",
    price: "₹3,800 / Sq.ft",
  },
];

export default function PopularLocations() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex justify-between items-center mb-8">
          <h2 className="text-4xl font-bold">
            Popular Locations in Coimbatore
          </h2>

          <button className="text-yellow-500 font-semibold">
            View All
          </button>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-5">
          {locations.map((location) => (
            <div
              key={location.name}
              className="rounded-xl overflow-hidden border bg-white hover:shadow-xl transition"
            >
              <img
                src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6"
                alt={location.name}
                className="h-32 w-full object-cover"
              />

              <div className="p-4">
                <h3 className="font-bold">
                  {location.name}
                </h3>

                <p className="text-sm text-gray-500">
                  {location.properties}
                </p>

                <p className="mt-2 text-yellow-600 font-semibold">
                  {location.price}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}