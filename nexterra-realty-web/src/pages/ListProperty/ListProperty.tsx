
import { useState } from "react";
import GoogleMapComponent from "../../components/GoogleMapComponent";

const API_URL = "https://nexterra-realty.onrender.com";

export default function ListProperty() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    location: "",
    bedrooms: "",
    bathrooms: "",
    area: "",
    propertyType: "",
    latitude: "",
    longitude: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
   if (!formData.latitude || !formData.longitude) {
  alert("Please select property location on map");
  return;
}
    const property = {
      title: formData.title,
      description: formData.description,
      price: Number(formData.price),
      location: formData.location,
      bedrooms: Number(formData.bedrooms),
      bathrooms: Number(formData.bathrooms),
      area: Number(formData.area),
      propertyType: formData.propertyType,
      latitude: Number(formData.latitude),
      longitude: Number(formData.longitude),
      imageUrl: "",
      status: "Pending",
    };

    try {
      const response = await fetch(
        `${API_URL}/api/properties`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(property),
        }
      );

      if (response.ok) {
        alert("Property submitted successfully!");

        setFormData({
          title: "",
          description: "",
          price: "",
          location: "",
          bedrooms: "",
          bathrooms: "",
          area: "",
          propertyType: "",
          latitude: "",
          longitude: "",
        });
      } else {
        alert("Failed to submit property");
      }
    } catch (error) {
      console.error(error);
      alert("Server connection failed");
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-[#071B3B] text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold">
            List Your Property
          </h1>

          <p className="mt-4 text-gray-300">
            Submit your property and our team
            will review it before publishing.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="bg-white rounded-3xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-8">
            Property Submission Form
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <input
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Property Title"
              className="border p-3 rounded-xl"
            />

            <input
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="Price"
              className="border p-3 rounded-xl"
            />

            <input
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Location"
              className="border p-3 rounded-xl"
            />

            <select
              name="propertyType"
              value={formData.propertyType}
              onChange={handleChange}
              className="border p-3 rounded-xl"
            >
              <option value="">
                Select Property Type
              </option>
              <option>Villa</option>
              <option>Apartment</option>
              <option>Plot</option>
              <option>Commercial</option>
            </select>

            <input
              name="bedrooms"
              value={formData.bedrooms}
              onChange={handleChange}
              placeholder="Bedrooms"
              className="border p-3 rounded-xl"
            />

            <input
              name="bathrooms"
              value={formData.bathrooms}
              onChange={handleChange}
              placeholder="Bathrooms"
              className="border p-3 rounded-xl"
            />

            <input
              name="area"
              value={formData.area}
              onChange={handleChange}
              placeholder="Area (sq.ft)"
              className="border p-3 rounded-xl"
            />

            
          </div>

          <textarea
            rows={6}
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Property Description"
            className="w-full border p-3 rounded-xl mt-6"
          />
          {/* Property Location Map */}
<div className="md:col-span-2 mt-4">
  <h3 className="text-xl font-semibold mb-3">
    Select Property Location on Map
  </h3>

  <GoogleMapComponent
    onLocationSelect={(lat, lng) => {
      setFormData((prev) => ({
        ...prev,
        latitude: lat.toString(),
        longitude: lng.toString(),
      }));
    }}
  />

  <div className="grid md:grid-cols-2 gap-4 mt-4">
    <input
      value={formData.latitude}
      readOnly
      placeholder="Latitude"
      className="border p-3 rounded-xl bg-gray-100"
    />

    <input
      value={formData.longitude}
      readOnly
      placeholder="Longitude"
      className="border p-3 rounded-xl bg-gray-100"
    />
  </div>
</div>

          <button
            onClick={handleSubmit}
            className="mt-8 bg-[#071B3B] text-white px-8 py-3 rounded-xl"
          >
            Submit Property
          </button>
        </div>
      </div>
    </div>
  );
}

