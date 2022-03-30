import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, ZoomControl, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import TopoJSON from "../components/TopoJSON";
import nigeriaStatesTopoJSON from "../data/nigeria-states-topo.json";
import nigeriaLgaTopoJSON from "../data/nigeria-lga-topo.json";
import { locationLevels } from "../utils/constants";

const zoom = 7;
const location = [9, 8];
//TODO Routing
export default function LeafletContainer({ locationLevel }) {
  // https://github.com/PaulLeCam/react-leaflet/issues/841
  // useRef doesn't work so we have to save the map instance.
  // const [mapRefObject, setMapRefObject] = useState();

  return (
    <>
      {/* <h1 className="text-xl text-warning-500 bg-red-500">
        The quick brown fox Jumps over the lazy dog
      </h1> */}
      <MapContainer
        key={locationLevel.zoom}
        className="markercluster-map"
        center={location}
        zoom={locationLevel.zoom}
        maxZoom={18}
        zoomControl={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <ZoomControl position="bottomright" />
        <TopoJSON
          className="polgon-style"
          locationLevel={locationLevel}
          data={nigeriaStatesTopoJSON}
        />
        {locationLevel.name !== locationLevels.one.name && (
          <TopoJSON
            className="polgon-style2"
            locationLevel={locationLevel}
            data={nigeriaLgaTopoJSON}
          />
        )}
        <Tooltip>I appear on mouse over</Tooltip>
      </MapContainer>
    </>
  );
}
