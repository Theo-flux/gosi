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
const FUTA = [7.307, 5.1398];

function LocationMarker() {
  const [position, setPosition] = useState(null);
  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
      console.log(e);
    },
  });

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
}

export default function MapWrapper() {
  // https://github.com/PaulLeCam/react-leaflet/issues/841
  // useRef doesn't work so we have to save the map instance.
  const [mapRefObject, setMapRefObject] = useState();

  useEffect(() => {
    if (mapRefObject)
      setTimeout(() => {
        mapRefObject?.flyTo(FUTA, 14, {
          duration: 2.5,
        });
      }, 1500);
    nigeriaStatesGeoJSON;
  }, [mapRefObject]);

  return (
    <MapContainer
      whenCreated={(mapInstance) => {
        setMapRefObject(mapInstance);
      }}
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
      {/* <Marker position={location} /> */}
      <ZoomControl position="bottomright" />
      <GeoJSON data={nigeriaStatesGeoJSON} />
      {/* <LocationMarker /> */}
    </MapContainer>
  );
}
