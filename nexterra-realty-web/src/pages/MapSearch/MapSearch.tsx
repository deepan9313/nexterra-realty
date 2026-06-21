
import { GoogleMap, LoadScript, Marker, Circle } from "@react-google-maps/api";
import { useState, useEffect } from "react";

const center = {
  lat: 11.0168,
  lng: 76.9558,
};

export default function MapSearch() {
  const [selectedLocation, setSelectedLocation] = useState(center);
  const [properties, setProperties] = useState<any[]>([]);
  const [nearbyProperties, setNearbyProperties] = useState<any[]>([]);

  useEffect(() => {
    fetch("http://localhost:5240/api/properties")
      .then((res) => res.json())
      .then((data) => setProperties(data))
      .catch((err) => console.error(err));
  }, []);

  const handleMapClick = (
    event: google.maps.MapMouseEvent
  ) => {
    if (!event.latLng) return;

    setSelectedLocation({
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    });
  };

  const getDistanceKm = (
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number
  ) => {
    const R = 6371;

    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

    return R * (2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)));
  };

  const searchNearbyProperties = () => {
    const filtered = properties.filter((property) => {
      if (property.status !== "Approved") return false;

      const distance = getDistanceKm(
        selectedLocation.lat,
        selectedLocation.lng,
        property.latitude,
        property.longitude
      );

      return distance <= 5;
    });

    setNearbyProperties(filtered);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">
        Search Properties on Map
      </h1>

      <LoadScript
        googleMapsApiKey={
          import.meta.env.VITE_GOOGLE_MAPS_API_KEY
        }
      >
        <GoogleMap
          mapContainerStyle={{
            width: "100%",
            height: "600px",
          }}
          center={selectedLocation}
          zoom={13}
          onClick={handleMapClick}
        >
          <Marker position={selectedLocation} />

          {properties
            .filter((property) => property.status === "Approved")
            .map((property) => (
              <Marker
                key={property.id}
                position={{
                  lat: property.latitude,
                  lng: property.longitude,
                }}
              />
            ))}

          <Circle
            center={selectedLocation}
            radius={5000}
            options={{
              fillColor: "#2563eb",
              fillOpacity: 0.2,
              strokeColor: "#2563eb",
              strokeWeight: 2,
            }}
          />
        </GoogleMap>
      </LoadScript>

      <button
        onClick={searchNearbyProperties}
        className="mt-6 bg-[#071B3B] text-white px-6 py-3 rounded-xl"
      >
        Search Properties in 5 KM Radius
      </button>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">
          Nearby Properties
        </h2>

        {nearbyProperties.map((property) => (
          <div
            key={property.id}
            className="bg-white shadow p-4 rounded-xl mb-4"
          >
            <h3 className="font-bold">
              {property.title}
            </h3>

            <p>{property.location}</p>

            <p>
              ₹{property.price.toLocaleString()}
            </p>

            <a
              href={`/property/${property.id}`}
              className="text-blue-600"
            >
              View Details
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

