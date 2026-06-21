
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { useState } from "react";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const defaultCenter = {
  lat: 11.0168,
  lng: 76.9558,
};

interface GoogleMapComponentProps {
  onLocationSelect?: (lat: number, lng: number) => void;
}

export default function GoogleMapComponent({
  onLocationSelect,
}: GoogleMapComponentProps) {
  const [markerPosition, setMarkerPosition] = useState(defaultCenter);

  const handleMapClick = (event: google.maps.MapMouseEvent) => {
    if (!event.latLng) return;

    const lat = event.latLng.lat();
    const lng = event.latLng.lng();

    setMarkerPosition({ lat, lng });

    if (onLocationSelect) {
      onLocationSelect(lat, lng);
    }
  };

  return (
    <LoadScript
      googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
    >
      <div className="rounded-2xl overflow-hidden">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={markerPosition}
          zoom={13}
          onClick={handleMapClick}
        >
          <Marker position={markerPosition} />
        </GoogleMap>

        <div className="bg-white p-4 border">
          <p className="font-semibold">
            Selected Location
          </p>

          <p>
            Latitude: {markerPosition.lat}
          </p>

          <p>
            Longitude: {markerPosition.lng}
          </p>
        </div>
      </div>
    </LoadScript>
  );
}

