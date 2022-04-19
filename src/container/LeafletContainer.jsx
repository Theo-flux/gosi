import React, { useState } from "react";
import { MapContainer, TileLayer, ZoomControl, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import TopoJSON from "../components/TopoJSON";
import nigeriaStatesTopoJSON from "../data/nigeria_state_boundaries.topo.json";

import { useParams, useSearchParams } from "react-router-dom";
import { capitalizeFirstLetter, getJSONFile } from "../utils/helpers";
import useWindowSize from "../utils/hooks/useWindowSize";

const location = [9, 8];

export default function LeafletContainer({ locationLevel }) {
  // https://github.com/PaulLeCam/react-leaflet/issues/841
  // useRef doesn't work so we have to save the map instance.
  const [searchParams] = useSearchParams();
  const { slug } = useParams();
  const { width } = useWindowSize();
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
        key={"container-" + lng + lat + locationLevel.zoom}
        className="markercluster-map"
        center={lng ? [lat, lng] : location}
        zoom={width > 525 ? locationLevel.zoom : locationLevel.mobileZoom}
        maxZoom={10}
        minZoom={5}
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
        {statesLGA !== null && (
          <TopoJSON
            data={statesLGA}
            locationLevel={locationLevel}
            className="polgon-style2"
          />
        )}
      </MapContainer>
    </>
  );
}
