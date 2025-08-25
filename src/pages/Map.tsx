import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix marker icons
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
});

const MapCard: React.FC = () => {
  return (
    <div className="z-10  w-full rounded-lg shadow-md overflow-hidden flex items-center justify-center">
      <div className="h-[300px] w-[700px] ">
        <MapContainer
          center={[34.020882, -6.84165]}
          zoom={13}
          scrollWheelZoom={false}
          className="w-full h-full"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[34.020882, -6.84165]}>
            <Popup>📍 Rabat, Morocco</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default MapCard;
