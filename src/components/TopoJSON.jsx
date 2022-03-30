import React, { useRef, useEffect } from "react";
import { GeoJSON } from "react-leaflet";
import { useNavigate } from "react-router-dom";
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
  const { data, locationLevel, ...otherProps } = props;

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
    console.log(e?.target?.feature?.properties);
    const locationData = e?.target?.feature?.properties;
    //TODO: Make your api calls here data from feature
    //Todo: Add FCT exception

    if (locationData.state) {
      if (locationData.state.toLowerCase() === "Fct, Abuja".toLowerCase())
        navigate(`/profiles/${"Fct-Abuja"}`.toLowerCase());
      else
        navigate(`/profiles/${locationData.state}${stateSuffix}`.toLowerCase());
    } else if (locationData.NAME_0) {
      console.log(locationData.NAME_1);

      if (
        locationData.NAME_1.toLowerCase() ===
        "Federal Capital Territory".toLowerCase()
      )
        navigate(
          `/profiles/${"Fct-Abuja"}/${
            locationData.NAME_2
          }${lgaSuffix}`.toLowerCase()
        );
      else
        navigate(
          `/profiles/${locationData.NAME_1}${stateSuffix}/${locationData.NAME_2}${lgaSuffix}`.toLowerCase()
        );
    }
    const dataState = {
      objectid: "1255",
      statecode: "NI",
      state: "Niger",
      capcity: "Minna",
      source: "eHA-Tosin",
      timestamp: "1613551800",
      globalid: "{EEC25567-4A6E-4752-81E3-04821ECCC3FD}",
      shape_area: "5.80315166504688",
      shape_len: "18.6370512945355",
      geozone: "NCZ",
      cartodb_id: 36,
      created_at: "2015-04-03T18:35:50",
      updated_at: "2015-04-03T18:35:50",
    };
    const dataLga = {
      ID_0: 163,
      ISO: "NGA",
      NAME_0: "Nigeria",
      ID_1: 27,
      NAME_1: "Niger",
      ID_2: 543,
      NAME_2: "Borgu",
      CCN_2: 0,
      TYPE_2: "Local Authority",
      ENGTYPE_2: "Local Authority",
      VARNAME_2: null,
      HASC_2: null,
      CCA_2: null,
      NL_NAME_2: null,
    };
  }

  function onEachFeatureCountry(feature, layer) {
    function handleHover(e, layer) {
      const { state } = e?.target?.feature?.properties;
      if (state.toLowerCase() === "Fct, Abuja".toLowerCase())
        layer.bindPopup("Fct-Abuja").openPopup()
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
      if (
        NAME_1.toLowerCase() ===
        "Federal Capital Territory".toLowerCase()
      )
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
