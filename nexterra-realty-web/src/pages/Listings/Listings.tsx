
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";


interface Property {
  id: number;
  title: string;
  description: string;
  price: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  propertyType: string;
  status: string;
  imageUrl: string;
  latitude: number;
  longitude: number;
}

export default function Listings() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [searchParams] = useSearchParams();

  const locationFilter =
    searchParams.get("location")?.toLowerCase() || "";

  const typeFilter =
    searchParams.get("type")?.toLowerCase() || "";

  const budgetFilter =
    Number(searchParams.get("budget")) || 0;

  useEffect(() => {
    fetch("https://nexterra-realty.onrender.com/api/properties")
      .then((res) => res.json())
      .then((data) => setProperties(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">

      <div className="bg-[#071B3B] text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold">
            Find Your Perfect Property
          </h1>

          <p className="text-gray-300 mt-4">
            Browse premium properties across Coimbatore
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10">
        

<div className="h-8"></div>

        <div className="grid lg:grid-cols-4 gap-8">

          <div className="bg-white p-6 rounded-2xl shadow h-fit">
            <h2 className="font-bold text-xl mb-6">
              Search Results
            </h2>

            <p className="mb-2">
              <strong>Location:</strong> {locationFilter || "All"}
            </p>

            <p className="mb-2">
              <strong>Type:</strong> {typeFilter || "All"}
            </p>

            <p>
              <strong>Budget:</strong>{" "}
              {budgetFilter > 0
                ? `₹${budgetFilter.toLocaleString()}`
                : "Any"}
            </p>
          </div>

          <div className="lg:col-span-3">

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

              {properties
                .filter((property) => property.status === "Approved")
                .filter((property) =>
                  locationFilter === ""
                    ? true
                    : property.location
                        .toLowerCase()
                        .includes(locationFilter)
                )
                .filter((property) =>
                  typeFilter === ""
                    ? true
                    : property.propertyType
                        .toLowerCase()
                        .includes(typeFilter)
                )
                .filter((property) =>
                  budgetFilter === 0
                    ? true
                    : property.price <= budgetFilter
                )
                .map((property) => (

                  <div
                    key={property.id}
                    className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-2xl transition"
                  >
                    <img
                      src={
                        property.imageUrl ||
                        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
                      }
                      alt={property.title}
                      className="h-52 w-full object-cover"
                    />

                    <div className="p-5">

                      <p className="text-yellow-600 font-bold text-xl">
                        ₹{property.price.toLocaleString()}
                      </p>

                      <h3 className="font-bold mt-2">
                        {property.title}
                      </h3>

                      <p className="text-gray-500 text-sm">
                        {property.location}
                      </p>

                      <div className="flex justify-between mt-4 text-sm">
                        <span>{property.bedrooms} Beds</span>
                        <span>{property.bathrooms} Baths</span>
                        <span>{property.area} Sq.ft</span>
                      </div>

                      <a
                        href={`/property/${property.id}`}
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

      </div>

    </div>
  );
}

