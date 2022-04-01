import React, { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  ZoomControl,
  Tooltip,
  useMapEvents,
  GeoJSON,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import TopoJSON from "../components/TopoJSON";
import nigeriaStatesTopoJSON from "../data/nigeria-states-topo.json";
import nigeriaLgaTopoJSON from "../data/nigeria-lga-topo.json";
import { locationLevels } from "../utils/constants";
import { useParams, useSearchParams } from "react-router-dom";

const getJSONFile = async (state) => {
  const FilePath = `../data/lgaByStateTopoJSON/${state}.topo.json`;
  const File = await import(`../data/lgaByStateTopoJSON/${state}.topo.json`);
  return File;
};

function capitalizeFirstLetter(string) {
  return string[0].toUpperCase() + string.slice(1);
}

const location = [9, 8];
const FUTA = [7.307, 5.1398];

function LocationMarker({ zoom }) {
  const [position, setPosition] = useState(null);
  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(e) {
      setPosition(e.latlng);
      map.panTo(e.latlng, zoom);
    },
  });

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
}
export default function LeafletContainer({ locationLevel }) {
  // https://github.com/PaulLeCam/react-leaflet/issues/841
  // useRef doesn't work so we have to save the map instance.
  const [searchParams] = useSearchParams();
  const { slug } = useParams();
  const state = slug ? capitalizeFirstLetter(slug.split("-state")[0]) : null;
  const lng = searchParams.get("lng");
  const lat = searchParams.get("lat");

  const [statesLGA, setStatesLGA] = useState(null);

  getJSONFile(slug === "fct-abuja" ? "Federal_Capital_Territory" : state).then(
    (file) => setStatesLGA(file)
  );

  return (
    <>
      <MapContainer
        key={"container" + lng + lat + locationLevel.zoom}
        className="markercluster-map"
        center={lng ? [lat, lng] : location}
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
        {/* {locationLevel.name !== locationLevels.one.name && (
          <TopoJSON
            className="polgon-style2"
            locationLevel={locationLevel}
            data={nigeriaLgaTopoJSON}
          />
        )} */}
        {statesLGA !== null && (
          <TopoJSON
            data={statesLGA}
            locationLevel={locationLevel}
            className="polgon-style2"
          />
        )}
        <Tooltip>I appear on mouse over</Tooltip>
        {/* <LocationMarker zoom={locationLevel.zoom} /> */}
      </MapContainer>
    </>
  );
}
