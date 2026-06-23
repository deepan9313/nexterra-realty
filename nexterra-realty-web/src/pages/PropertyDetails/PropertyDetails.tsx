
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
  latitude: number;
  longitude: number;
  imageUrl: string;
}

export default function PropertyDetails() {
  const { id } = useParams();

  const [property, setProperty] = useState<Property | null>(null);

  useEffect(() => {
    fetch(`https://nexterra-realty.onrender.com/api/properties/${id}`)
      .then((res) => res.json())
      .then((data) => setProperty(data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!property) {
    return (
      <div className="p-10 text-center">
        Loading Property...
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen">

      <div className="max-w-6xl mx-auto py-10 px-6">

        <img
          src={property.imageUrl}
          alt={property.title}
          className="w-full h-[500px] object-cover rounded-3xl shadow"
        />

        <div className="bg-white rounded-3xl shadow p-8 mt-8">

          <h1 className="text-4xl font-bold">
            {property.title}
          </h1>

          <p className="text-yellow-600 text-3xl font-bold mt-4">
            ₹{property.price.toLocaleString()}
          </p>

          <p className="text-gray-500 mt-2">
            📍 {property.location}
          </p>

          <div className="grid grid-cols-3 gap-4 mt-8">

            <div className="bg-gray-100 p-4 rounded-xl text-center">
              🛏 {property.bedrooms} Beds
            </div>

            <div className="bg-gray-100 p-4 rounded-xl text-center">
              🛁 {property.bathrooms} Baths
            </div>

            <div className="bg-gray-100 p-4 rounded-xl text-center">
              📐 {property.area} Sq.ft
            </div>

          </div>

          <h2 className="text-2xl font-bold mt-10">
            Description
          </h2>

          <p className="text-gray-700 mt-4">
            {property.description}
          </p>

          <h2 className="text-2xl font-bold mt-10">
            Location
          </h2>

          <iframe
            title="Property Location"
            width="100%"
            height="400"
            className="rounded-2xl mt-4"
            loading="lazy"
            src={`https://maps.google.com/maps?q=${property.latitude},${property.longitude}&z=15&output=embed`}
          />

        </div>

      </div>

    </div>
  );
}

