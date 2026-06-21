import { useState } from "react";
import GoogleMapComponent from "../../components/GoogleMapComponent";

export default function AddProperty() {

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [area, setArea] = useState("");
  
  const [latitude, setLatitude] = useState(11.0168);
  const [longitude, setLongitude] = useState(76.9558);
  
  const [imageUrl, setImageUrl] = useState("");
  const [uploading, setUploading] = useState(false);
   const handleImageUpload = async (
  e: React.ChangeEvent<HTMLInputElement>
) => {
  const file = e.target.files?.[0];

  if (!file) return;

  setUploading(true);

  const formData = new FormData();
  formData.append("file", file);
  formData.append(
    "upload_preset",
    import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET
  );

  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`,
    {
      method: "POST",
      body: formData,
    }
  );

  const data = await response.json();

  setImageUrl(data.secure_url);
  setUploading(false);
};

  const handleSubmit = async () => {
 console.log({
  title,
  price,
  location,
  bedrooms,
  bathrooms,
  area,
  imageUrl
});
    
const property = {
  title,
  description: "Property added from website",
  price: Number(price),
  location,
  bedrooms: Number(bedrooms),
  bathrooms: Number(bathrooms),
  area: Number(area),
  propertyType: "Villa",
  latitude,
  longitude,
  status: "Pending",
  imageUrl,
};



    const response = await fetch(
      "http://localhost:5240/api/properties",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(property)
      }
    );

    if (response.ok) {
      alert("Property Added Successfully!");
    } else {
      alert("Failed to Add Property");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-6">

      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-lg p-8">

        <h1 className="text-4xl font-bold mb-8">
          Add New Property
        </h1>

        {/* Property Information */}
        <h2 className="text-2xl font-semibold mb-4">
          Property Information
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <input
  type="text"
  placeholder="Property Title"
  value={title}
  onChange={(e) => setTitle(e.target.value)}
  className="border p-3 rounded-xl"
/>

          <select className="border p-3 rounded-xl">
            <option>Property Type</option>
            <option>Villa</option>
            <option>Apartment</option>
            <option>Plot</option>
            <option>Commercial</option>
          </select>

          <input
  type="text"
  placeholder="Property Price"
  value={price}
  onChange={(e) => setPrice(e.target.value)}
  className="border p-3 rounded-xl"
/>
          <select className="border p-3 rounded-xl">
            <option>Property Status</option>
            <option>Pending</option>
            <option>Approved</option>
            <option>Rejected</option>
          </select>

         <input
  type="text"
  placeholder="Location"
  value={location}
  onChange={(e) => setLocation(e.target.value)}
  className="border p-3 rounded-xl md:col-span-2"
/>

        </div>

        {/* Property Details */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Property Details
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          <input
  type="number"
  placeholder="Bedrooms"
  value={bedrooms}
  onChange={(e) => setBedrooms(e.target.value)}
  className="border p-3 rounded-xl"
/>
          <input
  type="number"
  placeholder="Bathrooms"
  value={bathrooms}
  onChange={(e) => setBathrooms(e.target.value)}
  className="border p-3 rounded-xl"
/>

         <input
  type="text"
  placeholder="Area (Sq.ft)"
  value={area}
  onChange={(e) => setArea(e.target.value)}
  className="border p-3 rounded-xl"
/>

          <input
            type="number"
            placeholder="Parking"
            className="border p-3 rounded-xl"
          />

        </div>

        {/* Amenities */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Amenities
        </h2>

        <div className="grid md:grid-cols-3 gap-4">

          <label><input type="checkbox" /> Swimming Pool</label>
          <label><input type="checkbox" /> Gym</label>
          <label><input type="checkbox" /> Garden</label>
          <label><input type="checkbox" /> Lift</label>
          <label><input type="checkbox" /> Security</label>
          <label><input type="checkbox" /> Power Backup</label>

        </div>

        {/* Map Section */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Property Location
        </h2>

        
<GoogleMapComponent
  onLocationSelect={(lat, lng) => {
    setLatitude(lat);
    setLongitude(lng);
  }}
/>



        {/* Image Upload */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Property Images
        </h2>

        <div>
  <input
    type="file"
    onChange={handleImageUpload}
    className="w-full border p-3 rounded-xl"
  />

  {uploading && (
    <p className="mt-2 text-blue-600">
      Uploading image...
    </p>
  )}

  {imageUrl && (
    <img
      src={imageUrl}
      alt="Property"
      className="mt-4 h-48 rounded-xl"
    />
  )}
</div>

        {/* Owner Information */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Owner Information
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

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

        </div>

        {/* Description */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Property Description
        </h2>

        <textarea
          rows={6}
          placeholder="Detailed Property Description"
          className="w-full border p-3 rounded-xl"
        />

        {/* Buttons */}
        <div className="flex gap-4 mt-8">

          <button className="bg-gray-500 text-white px-8 py-3 rounded-xl">
            Save Draft
          </button>

          <button
  onClick={handleSubmit}
  className="bg-[#071B3B] text-white px-8 py-3 rounded-xl"
>
  Publish Property
</button>
        </div>

      </div>

    </div>
  );
}