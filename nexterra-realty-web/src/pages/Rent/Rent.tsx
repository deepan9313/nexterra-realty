export default function Rent() {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Hero */}
      <div className="bg-[#071B3B] text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-bold">
            Rental Properties
          </h1>

          <p className="mt-4 text-gray-300">
            Find apartments, villas and homes for rent.
          </p>

        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

          {[1,2,3,4,5,6].map((item) => (
            <div
              key={item}
              className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-2xl transition"
            >
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
                alt="Rental Property"
                className="h-52 w-full object-cover"
              />

              <div className="p-5">

                <p className="text-yellow-600 font-bold text-xl">
                  ₹25,000 / Month
                </p>

                <h3 className="font-bold mt-2">
                  Premium Apartment
                </h3>

                <p className="text-gray-500 text-sm">
                  Peelamedu, Coimbatore
                </p>

               <a
  href="/property/1"
  className="block text-center w-full mt-4 bg-[#071B3B] text-white py-2 rounded-lg"
>
  View Details
</a>

              </div>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}