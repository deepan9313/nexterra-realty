export default function Footer() {
  return (
    <footer className="bg-[#071B3B] text-white mt-20">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-4 gap-10">

          {/* Company */}
          <div>
            <h2 className="text-2xl font-bold text-yellow-400">
              Nexterra Realty
            </h2>

            <p className="text-gray-300 mt-4">
              Your trusted partner for buying, selling and
              renting premium properties across Coimbatore.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-xl mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2 text-gray-300">
              <li><a href="/">Home</a></li>
              <li><a href="/listings">Buy</a></li>
              <li><a href="/rent">Rent</a></li>
              <li><a href="/commercial">Commercial</a></li>
            </ul>
          </div>

          {/* Property Types */}
          <div>
            <h3 className="font-bold text-xl mb-4">
              Property Types
            </h3>

            <ul className="space-y-2 text-gray-300">
              <li>Villa</li>
              <li>Apartment</li>
              <li>Plot</li>
              <li>Commercial Space</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-xl mb-4">
              Contact Us
            </h3>

            <p className="text-gray-300">
              📍 Coimbatore, Tamil Nadu
            </p>

            <p className="text-gray-300 mt-2">
              📞 +91 98765 43210
            </p>

            <p className="text-gray-300 mt-2">
              ✉ info@nexterrarealty.com
            </p>
          </div>

        </div>

      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700">

        <div className="max-w-7xl mx-auto px-6 py-5 text-center text-gray-400">

          © 2026 Nexterra Realty. All Rights Reserved.

        </div>

      </div>

    </footer>
  );
}