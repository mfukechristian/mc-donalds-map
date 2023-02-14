import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = () => {
  return (
    <div>
      <MapContainer
        center={[-33.9249, 18.4241]}
        zoom={13}
        scrollWheelZoom={true}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[-33.9249, 18.4241]}></Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
