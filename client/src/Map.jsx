import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import mcDonaldIcon from "./McDonalds-logo.png"; // Import the image file
// import stores from "./storesList.json";
import "leaflet/dist/leaflet.css";
import axios from "axios";

//creating a custom icon for marker
const mcDoLogo = new Icon({
  iconUrl: mcDonaldIcon,
  iconSize: [50, 30],
});

const Map = () => {
  //gettin stores from the express server
  const [stores, setStores] = useState([]);
  const [showMarkers, setShowMarkers] = useState(false);

  useEffect(() => {
    const fetchStores = async () => {
      const { data } = await axios.get("http://localhost:5000/stores");
      setStores(data);
    };

    fetchStores();
  }, []);

  const toggleMarkers = () => {
    setShowMarkers(!showMarkers);
  };

  return (
    <div className="main-container">
      <div className="btn-container">
        {" "}
        <button onClick={toggleMarkers}>
          <img src={mcDonaldIcon} alt="logo" />
          Mc Donald's Stores <span>({stores.length})</span>
        </button>
      </div>
      <MapContainer
        center={[-33.9249, 18.4241]}
        zoom={11}
        scrollWheelZoom={true}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {showMarkers &&
          stores.map((store) => (
            <Marker
              key={store.Store}
              position={[store.Latitude, store.Longitude]}
              icon={mcDoLogo}
            >
              <Popup>
                <ul>
                  <li>{store.Store}</li>
                  <li>
                    <span>X:</span>
                    {store.Latitude}
                  </li>
                  <li>
                    <span>Y:</span>
                    {store.Longitude}
                  </li>
                </ul>
              </Popup>
            </Marker>
          ))}
      </MapContainer>
    </div>
  );
};

export default Map;
