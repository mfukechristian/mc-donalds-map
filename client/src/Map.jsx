import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import mcDonaldIcon from "./McDonalds-logo.png"; // Import the image file

import "leaflet/dist/leaflet.css";

const redMarker = new Icon({
  iconUrl: mcDonaldIcon,
  iconSize: [50, 30],
});

const Map = () => {
  return (
    <div>
      <MapContainer
        center={[-33.9249, 18.4241]}
        zoom={13}
        scrollWheelZoom={true}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[-33.9249, 18.4241]} icon={redMarker}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
