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
import nigeriaStatesTopoJSON from "../data/nigeria_state_boundaries.topo.json";
import nigeriaLgaTopoJSON from "../data/nigeria-lga-topo.json";

// we will change to this next week -----------------------------------------------------
// import nigeriaLgaGeoJSON from "../data/nigeria_lga_boundaries.json";
// import nigeriaStatesGeoJSON from "../data/nigeria_state_boundaries.json";
// import nigeriaStatesTopoJSON from "../data/nigeria_state_boundaries.topo.json";
// import nigeriaLgaTopoJSON from "../data/nigeria_lga_boundaries.topo.json";
//---------------------------------------------------------------------------------------
import { locationLevels } from "../utils/constants";
import { useParams, useSearchParams } from "react-router-dom";
import { capitalizeFirstLetter, getJSONFile } from "../utils/helpers";

const location = [9, 8];
const FUTA = [7.307, 5.1398];

export default function LeafletContainer({ locationLevel }) {
  // https://github.com/PaulLeCam/react-leaflet/issues/841
  // useRef doesn't work so we have to save the map instance.
  const [searchParams] = useSearchParams();
  const { slug } = useParams();
  const state = slug ? capitalizeFirstLetter(slug.split("-state")[0]) : null;
  const lng = searchParams.get("lng");
  const lat = searchParams.get("lat");

  const [statesLGA, setStatesLGA] = useState(null);

  getJSONFile(
    slug === "Federal Capital Territory" ? "Federal_Capital_Territory" : state
  ).then((file) => setStatesLGA(file));

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
      </MapContainer>
    </>
  );
}
