export default function ListProperty() {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Hero Section */}
      <div className="bg-[#071B3B] text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-bold">
            List Your Property
          </h1>

          <p className="mt-4 text-gray-300">
            Submit your property and our team will review it before publishing.
          </p>

        </div>
      </div>

      {/* Form Section */}
      <div className="max-w-5xl mx-auto px-6 py-16">

        <div className="bg-white rounded-3xl shadow-lg p-8">

          <h2 className="text-3xl font-bold mb-8">
            Property Submission Form
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <input
              type="text"
              placeholder="Owner Name"
              className="border p-3 rounded-xl"
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="border p-3 rounded-xl"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="border p-3 rounded-xl"
            />

            <input
              type="text"
              placeholder="Property Title"
              className="border p-3 rounded-xl"
            />

            <select className="border p-3 rounded-xl">
              <option>Select Property Type</option>
              <option>Villa</option>
              <option>Apartment</option>
              <option>Plot</option>
              <option>Commercial</option>
            </select>

            <input
              type="text"
              placeholder="Property Price"
              className="border p-3 rounded-xl"
            />

            <input
              type="text"
              placeholder="Location"
              className="border p-3 rounded-xl md:col-span-2"
            />
            {/* Property Location Map */}
<div className="mt-6">

  <label className="block font-semibold mb-2">
    Property Location
  </label>

  <div className="h-96 bg-gray-200 rounded-2xl flex items-center justify-center text-gray-500">
    Google Maps Property Pin Integration Coming Soon
  </div>

  <p className="text-sm text-gray-500 mt-2">
    Property owners will be able to pin the exact property location on the map.
  </p>

</div>

          </div>

          <textarea
            rows={6}
            placeholder="Property Description"
            className="w-full border p-3 rounded-xl mt-6"
          />

          <div className="mt-6">
            <label className="block font-semibold mb-2">
              Upload Property Images
            </label>

            <input
              type="file"
              multiple
              className="w-full border p-3 rounded-xl"
            />
          </div>

          <button
            className="mt-8 bg-[#071B3B] text-white px-8 py-3 rounded-xl hover:bg-[#0B2957] transition"
          >
            Submit Property
          </button>

          <div className="mt-6 bg-green-50 border border-green-200 p-4 rounded-xl">
            <p className="text-green-700 font-medium">
              Note: All submitted properties are manually reviewed by our team before being published.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}