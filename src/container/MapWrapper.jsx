import React, { useEffect, useState } from "react";
import {
  MapContainer,
  Marker,
  TileLayer,
  ZoomControl,
  GeoJSON,
  useMapEvents,
  Popup,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import nigeriaLgaGeoJSON from "../data/nigeria-lga.json";
import nigeriaStatesGeoJSON from "../data/nigeria-states.json";

const zoom = 6;
const location = [9, 8];


export default function MapWrapper() {
  // https://github.com/PaulLeCam/react-leaflet/issues/841
  // useRef doesn't work so we have to save the map instance.
  const [mapRefObject, setMapRefObject] = useState();

  return (
    <MapContainer
      className="markercluster-map"
      center={location}
      zoom={zoom}
      maxZoom={18}
      zoomControl={false}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <ZoomControl position="bottomright" />
      <GeoJSON data={nigeriaStatesGeoJSON} />
    </MapContainer>
  );
}
