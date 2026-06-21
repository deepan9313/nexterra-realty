export default function Agents() {
  const agents = [
    {
      name: "Rajesh Kumar",
      role: "Senior Property Consultant",
      experience: "10 Years Experience",
      phone: "+91 98765 43210",
    },
    {
      name: "Priya Sharma",
      role: "Residential Specialist",
      experience: "8 Years Experience",
      phone: "+91 98765 43211",
    },
    {
      name: "Arun Prakash",
      role: "Commercial Property Expert",
      experience: "12 Years Experience",
      phone: "+91 98765 43212",
    },
    {
      name: "Deepika Nair",
      role: "Investment Advisor",
      experience: "7 Years Experience",
      phone: "+91 98765 43213",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Hero */}
      <section className="bg-[#071B3B] text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-bold">
            Meet Our Expert Agents
          </h1>

          <p className="mt-6 text-xl text-gray-300">
            Professional guidance for your real estate journey.
          </p>

        </div>
      </section>

      {/* Agents Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {agents.map((agent) => (
            <div
              key={agent.name}
              className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition"
            >
              <img
                src="https://i.pravatar.cc/300"
                alt={agent.name}
                className="w-full h-72 object-cover"
              />

              <div className="p-6 text-center">

                <h3 className="text-xl font-bold">
                  {agent.name}
                </h3>

                <p className="text-yellow-600 mt-2">
                  {agent.role}
                </p>

                <p className="text-gray-500 mt-2">
                  {agent.experience}
                </p>

                <p className="text-gray-600 mt-3">
                  {agent.phone}
                </p>

                <button className="mt-4 bg-[#071B3B] text-white px-6 py-2 rounded-xl">
                  Contact Agent
                </button>

              </div>

            </div>
          ))}

        </div>

      </section>

    </div>
  );
}