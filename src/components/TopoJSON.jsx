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
    //TODO: Make your api calls here data from feature
    //Todo: Add FCT exception

    if (locationData.state) {
      if (locationData.state.toLowerCase() === "Fct, Abuja".toLowerCase())
        navigate({
          pathname: `/profiles/${"Fct-Abuja"}`.toLowerCase(),
          search: createSearchParams({
            lng,
            lat,
          }).toString(),
        });
      else
        navigate({
          pathname:
            `/profiles/${locationData.state}${stateSuffix}`.toLowerCase(),
          search: createSearchParams({
            lng,
            lat,
          }).toString(),
        });
    } else if (locationData.NAME_0) {

      if (
        locationData.NAME_1.toLowerCase() ===
        "Federal Capital Territory".toLowerCase()
      )
        navigate({
          pathname: `/profiles/${"Fct-Abuja"}/${
            locationData.NAME_2
          }${lgaSuffix}`.toLowerCase(),
          search: createSearchParams({
            lng,
            lat,
          }).toString(),
        });
      else
        navigate({
          pathname:
            `/profiles/${locationData.NAME_1}${stateSuffix}/${locationData.NAME_2}${lgaSuffix}`.toLowerCase(),
          search: createSearchParams({
            lng,
            lat,
          }).toString(),
        });
    }
  }

  function onEachFeatureCountry(feature, layer) {
    function handleHover(e, layer) {
      const { state } = e?.target?.feature?.properties;
      if (state.toLowerCase() === "Fct, Abuja".toLowerCase())
        layer.bindPopup("Fct-Abuja").openPopup();
      else layer.bindPopup(`${state} state`).openPopup(); // here add openPopup()
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
      const { NAME_0, NAME_1, NAME_2 } = e?.target?.feature?.properties;
      if (NAME_1.toLowerCase() === "Federal Capital Territory".toLowerCase())
        layer.bindPopup(`${NAME_2}, Fct-Abuja, ${NAME_0}`).openPopup();
      else layer.bindPopup(`${NAME_2}, ${NAME_1} state, ${NAME_0}`).openPopup(); // here add openPopup()
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
      // key={locationLevel === locationLevels[0] ? "country" : "state"}
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
