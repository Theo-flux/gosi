import React, { useEffect, useState } from "react";
import {
  MapContainer,
  Marker,
  TileLayer,
  ZoomControl,
  GeoJSON,
  useMapEvents,
  Popup,
  useMapEvent,
  Tooltip,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import TopoJSON from "../components/TopoJSON";
import nigeriaStatesTopoJSON from "../data/nigeria-states-topo.json";
import nigeriaLgaTopoJSON from "../data/nigeria-lga-topo.json";

const zoom = 6;
const location = [9, 8];
//TODO Routing
export default function MapWrapper() {
  // https://github.com/PaulLeCam/react-leaflet/issues/841
  // useRef doesn't work so we have to save the map instance.
  const [mapRefObject, setMapRefObject] = useState();

  return (
    <>
      <h1 className="text-xl text-warning-500 bg-red-500">
        The quick brown fox Jumps over the lazy dog
      </h1>
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
        <TopoJSON className="polgon-style" data={nigeriaStatesTopoJSON} />
        <Tooltip>I appear on mouse over</Tooltip>
      </MapContainer>
    </>
  );
}
