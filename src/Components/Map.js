import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./Map.css";

class Map extends React.Component {
  render() {
    const myCoordinates = [40.3658515, 50.0701194];

    return (
      <MapContainer
        center={myCoordinates}
        zoom={15}
        maxZoom={30}
        attributionControl={true}
        zoomControl={true}
        doubleClickZoom={true}
        scrollWheelZoom={true}
        dragging={true}
        animate={true}
        easeLinearity={0.35}
      >
        <TileLayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />
        <Marker position={myCoordinates}>
          <Popup>Popup for any custom information.</Popup>
        </Marker>
      </MapContainer>
    );
  }
}

export default Map;
