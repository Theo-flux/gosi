import React, { useRef, useEffect } from "react";
import { GeoJSON } from "react-leaflet";
import { createSearchParams, useNavigate } from "react-router-dom";
import * as topojson from "topojson-client";
import { lgaSuffix, locationLevels, stateSuffix } from "../utils/constants";

/**
 * topojson handler inspired by
 * https://codesandbox.io/s/using-geojson-with-tons-of-data-in-react-leaflet-v3x-topojson-sbpiw?file=/src/App.js:178-215
 *
 */

//TODO: color and borders
export default function TopoJSON(props) {
  const navigate = useNavigate();
  const layerRef = useRef(null);
  const { data, locationLevel, handleMapRefObject, ...otherProps } = props;

  function addData(layer, jsonData) {
    if (jsonData.type === "Topology") {
      for (let key in jsonData.objects) {
        let geojson = topojson.feature(jsonData, jsonData.objects[key]);
        layer.addData(geojson);
      }
    } else {
      layer.addData(jsonData);
    }
  }

  function handleClick(e) {
    const locationData = e?.target?.feature?.properties;
    const { lat, lng } = e.latlng;

    if (locationData.admin2Name) {
      // check for LGA
      if (
        locationData.admin1Name.toLowerCase() ===
        "Federal Capital Territory".toLowerCase()
      )
        navigate({
          pathname: `/profiles/${"Federal Capital Territory"}/${
            locationData.admin2Name
          }${lgaSuffix}`,
          search: createSearchParams({
            lng,
            lat,
          }).toString(),
        });
      else
        navigate({
          pathname: `/profiles/${encodeURIComponent(
            locationData.admin1Name
          )}${stateSuffix}/${encodeURIComponent(
            locationData.admin2Name
          )}${lgaSuffix}`,
          search: createSearchParams({
            lng,
            lat,
          }).toString(),
        });
    } else if (locationData.admin1Name) {
      // Check for state
      if (
        locationData.admin1Name.toLowerCase() ===
        "Federal Capital Territory".toLowerCase()
      )
        navigate({
          pathname: `/profiles/${"Federal Capital Territory"}`,
          search: createSearchParams({
            lng,
            lat,
          }).toString(),
        });
      else
        navigate({
          pathname: `/profiles/${encodeURIComponent(
            locationData.admin1Name
          )}${stateSuffix}`,
          search: createSearchParams({
            lng,
            lat,
          }).toString(),
        });
    }
  }

  function onEachFeatureCountry(feature, layer) {
    function handleHover(e, layer) {
      const { admin1Name } = e?.target?.feature?.properties;
      if (
        admin1Name.toLowerCase() === "Federal Capital Territory".toLowerCase()
      )
        layer.bindPopup("Federal Capital Territory").openPopup();
      else layer.bindPopup(`${admin1Name} state`).openPopup(); // here add openPopup()
    }

    //bind click
    layer.on({
      mouseover: (e) => handleHover(e, layer),
      click: handleClick,
    });
  }

  function onEachFeature(feature, layer) {
    function handleHover(e, layer) {
      // for LGA data
      const { admin1Name, admin2Name } = e?.target?.feature?.properties;
      if (
        admin1Name.toLowerCase() === "Federal Capital Territory".toLowerCase()
      )
        layer
          .bindPopup(
            `${
              admin2Name ? admin2Name + "," : ""
            } Federal Capital Territory, Nigeria`
          )
          .openPopup();
      else
        layer
          .bindPopup(
            `${admin2Name ? admin2Name + "," : ""} ${admin1Name} state, Nigeria`
          )
          .openPopup(); // here add openPopup()
    }
    //bind click
    layer.on({
      mouseover: (e) => handleHover(e, layer),
      click: handleClick,
    });
  }

  useEffect(() => {
    const layer = layerRef.current;
    addData(layer, props.data);
  }, [props.data]);

  return (
    <GeoJSON
      key={data?.bbox[0] || "no data props"}
      whenCreated={(mapInstance) => {
        handleMapRefObject(mapInstance);
      }}
      ref={layerRef}
      {...otherProps}
      onEachFeature={
        locationLevel.name === locationLevels.one.name
          ? onEachFeatureCountry
          : onEachFeature
      }
    />
  );
}
