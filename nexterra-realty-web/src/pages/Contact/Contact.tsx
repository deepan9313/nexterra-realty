export default function Contact() {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Hero */}
      <div className="bg-[#071B3B] text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-bold">
            Contact Us
          </h1>

          <p className="mt-4 text-gray-300">
            Get in touch with Nexterra Realty
          </p>

        </div>
      </div>

      {/* Contact Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Form */}
          <div className="bg-white p-8 rounded-3xl shadow">

            <h2 className="text-3xl font-bold mb-6">
              Send a Message
            </h2>

            <input
              type="text"
              placeholder="Your Name"
              className="w-full border p-3 rounded-xl mb-4"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border p-3 rounded-xl mb-4"
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="w-full border p-3 rounded-xl mb-4"
            />

            <textarea
              rows={5}
              placeholder="Your Message"
              className="w-full border p-3 rounded-xl mb-4"
            />

            <button className="bg-[#071B3B] text-white px-8 py-3 rounded-xl">
              Send Message
            </button>

          </div>

          {/* Contact Details */}
          <div>

            <div className="bg-white p-6 rounded-3xl shadow mb-6">
              <h3 className="text-2xl font-bold mb-3">
                Office Address
              </h3>

              <p>
                Nexterra Realty<br />
                Coimbatore, Tamil Nadu
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow mb-6">
              <h3 className="text-2xl font-bold mb-3">
                Contact
              </h3>

              <p>📞 +91 98765 43210</p>
              <p>✉ info@nexterrarealty.com</p>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow">
              <h3 className="text-2xl font-bold mb-3">
                Business Hours
              </h3>

              <p>Monday - Saturday</p>
              <p>9:00 AM - 7:00 PM</p>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}