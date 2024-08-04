// Map.jsx (Modified)
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Import Leaflet CSS

function Map() {
  const [center, setCenter] = useState({ lat: 8.0014, lng: -66.1108 }); // Venezuela's center
  const [zoom, setZoom] = useState(5);

  const newsData = [
    { title: "News Article 1", location: [9.35, -69.66] }, // Maracaibo
    { title: "News Article 2", location: [10.64, -66.86] }, // Caracas
    // ... Add more news items for other locations in Venezuela
  ];

  return (
    <MapContainer center={center} zoom={zoom} style={{ height: "100vh" }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {newsData.map((item, index) => (
        <Marker key={index} position={item.location}>
          <Popup>{item.title}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default Map;
