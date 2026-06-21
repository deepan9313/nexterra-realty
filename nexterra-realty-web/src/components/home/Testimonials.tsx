export default function Testimonials() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          What Our Customers Say
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-gray-50 rounded-2xl p-6 shadow">
            <p className="text-gray-600 mb-4">
              Found my dream villa through Nexterra Realty.
              The experience was amazing.
            </p>

            <h3 className="font-bold">
              Arjun Prakash
            </h3>

            <p className="text-sm text-gray-500">
              Villa Buyer
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 shadow">
            <p className="text-gray-600 mb-4">
              Excellent customer support and premium listings.
            </p>

            <h3 className="font-bold">
              Priya Nair
            </h3>

            <p className="text-sm text-gray-500">
              Apartment Buyer
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 shadow">
            <p className="text-gray-600 mb-4">
              Best real estate platform in Coimbatore.
            </p>

            <h3 className="font-bold">
              Karthik R
            </h3>

            <p className="text-sm text-gray-500">
              Investor
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}