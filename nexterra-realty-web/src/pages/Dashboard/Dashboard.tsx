import { useEffect, useState } from "react";

const API_URL =
  import.meta.env.VITE_API_URL ||
  "https://nexterra-realty.onrender.com";

interface Property {
  id: number;
  title: string;
  location: string;
  status: string;
}

export default function Dashboard() {
  const [properties, setProperties] = useState<Property[]>([]);

  const [stats, setStats] = useState({
    total: 0,
    pending: 0,
    approved: 0,
    rejected: 0,
  });

  useEffect(() => {
    fetch(`${API_URL}/api/properties`)
      .then((res) => res.json())
      .then((data) => setProperties(data))
      .catch((err) => console.error(err));

    fetch(`${API_URL}/api/properties/stats`)
      .then((res) => res.json())
      .then((data) => setStats(data))
      .catch((err) => console.error(err));
  }, []);

  const approveProperty = async (id: number) => {
    await fetch(`${API_URL}/api/properties/approve/${id}`, {
      method: "PUT",
    });

    setProperties((prev) =>
      prev.map((property) =>
        property.id === id
          ? { ...property, status: "Approved" }
          : property
      )
    );
  };

  const rejectProperty = async (id: number) => {
    await fetch(`${API_URL}/api/properties/reject/${id}`, {
      method: "PUT",
    });

    setProperties((prev) =>
      prev.map((property) =>
        property.id === id
          ? { ...property, status: "Rejected" }
          : property
      )
    );
  };

  // KEEP THE REST OF YOUR EXISTING JSX BELOW THIS LINE




  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* Sidebar */}
      <div className="w-64 bg-[#071B3B] text-white p-6">

        <h2 className="text-2xl font-bold text-yellow-400 mb-10">
          Nexterra Admin
        </h2>

        <div className="space-y-3">

          <a
            href="/dashboard"
            className="block p-3 rounded-xl hover:bg-[#0B2957]"
          >
            🏠 Dashboard
          </a>

          <a
            href="/listings"
            className="block p-3 rounded-xl hover:bg-[#0B2957]"
          >
            🏡 Properties
          </a>

          <a
            href="/add-property"
            className="block p-3 rounded-xl hover:bg-[#0B2957]"
          >
            ➕ Add Property
          </a>

          <a
            href="#"
            className="block p-3 rounded-xl hover:bg-[#0B2957]"
          >
            ⏳ Pending
          </a>

          <a
            href="#"
            className="block p-3 rounded-xl hover:bg-[#0B2957]"
          >
            ✅ Approved
          </a>

          <a
            href="#"
            className="block p-3 rounded-xl hover:bg-[#0B2957]"
          >
            📨 Enquiries
          </a>

          <a
            href="#"
            className="block p-3 rounded-xl hover:bg-[#0B2957]"
          >
            ⚙ Settings
          </a>

          <a
            href="/"
            className="block p-3 rounded-xl hover:bg-red-600"
          >
            🚪 Logout
          </a>

        </div>

      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">

        <h1 className="text-4xl font-bold mb-8">
          Admin Dashboard
        </h1>

        
{/* Statistics Cards */}
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

  <div className="bg-blue-500 text-white p-6 rounded-2xl shadow">
    <h3>Total Properties</h3>
    <p className="text-3xl font-bold mt-2">
      {stats.total}
    </p>
  </div>

  <div className="bg-yellow-500 text-white p-6 rounded-2xl shadow">
    <h3>Pending Approvals</h3>
    <p className="text-3xl font-bold mt-2">
      {stats.pending}
    </p>
  </div>

  <div className="bg-green-500 text-white p-6 rounded-2xl shadow">
    <h3>Approved Properties</h3>
    <p className="text-3xl font-bold mt-2">
      {stats.approved}
    </p>
  </div>

  <div className="bg-purple-500 text-white p-6 rounded-2xl shadow">
    <h3>Rejected Properties</h3>
    <p className="text-3xl font-bold mt-2">
      {stats.rejected}
    </p>
  </div>

</div>



        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">

          <a
            href="/add-property"
            className="bg-[#071B3B] text-white p-6 rounded-2xl text-center font-semibold"
          >
            ➕ Add Property
          </a>

          <div className="bg-yellow-400 p-6 rounded-2xl text-center font-semibold">
            ⏳ Pending Properties
          </div>

          <div className="bg-green-500 text-white p-6 rounded-2xl text-center font-semibold">
            ✅ Approved Properties
          </div>

        </div>

        {/* Recent Properties */}
        <div className="bg-white rounded-2xl shadow mt-10 p-6">

          <h2 className="text-2xl font-bold mb-6">
            Recent Properties
          </h2>

          <table className="w-full">

            <thead>
              <tr className="border-b">
                <th className="text-left py-3">Property</th>
                <th className="text-left py-3">Location</th>
                <th className="text-left py-3">Price</th>
              </tr>
            </thead>

            <tbody>

              <tr className="border-b">
                <td className="py-3">Luxury Villa</td>
                <td>RS Puram</td>
                <td>₹1.25 Cr</td>
              </tr>

              <tr>
                <td className="py-3">Premium Apartment</td>
                <td>Race Course</td>
                <td>₹85 Lakh</td>
              </tr>

            </tbody>

          </table>

        </div>

        {/* Pending Approvals */}
        <div className="bg-white rounded-2xl shadow mt-10 p-6">

          <h2 className="text-2xl font-bold mb-6">
            Pending Property Approvals
          </h2>

          <table className="w-full">

            <thead>
              <tr className="border-b">
                <th className="text-left py-3">Property</th>
                <th className="text-left py-3">Owner</th>
                <th className="text-left py-3">Status</th>
                <th className="text-left py-3">Action</th>
              </tr>
            </thead>

            <tbody>

  {properties
    .filter((p) => p.status === "Pending")
    .map((property) => (
      <tr key={property.id}>
        <td className="py-3">{property.title}</td>

        <td>Customer</td>

        <td>
          <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">
            {property.status}
          </span>
        </td>

        <td>
      
<button
  onClick={() => approveProperty(property.id)}
  className="bg-green-500 text-white px-3 py-1 rounded mr-2"
>
  Approve
</button>


         
<button
  onClick={() => rejectProperty(property.id)}
  className="bg-red-500 text-white px-3 py-1 rounded"
>
  Reject
</button>


        </td>
      </tr>
    ))}

</tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

