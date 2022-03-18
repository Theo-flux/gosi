import React, { useRef, useEffect } from "react";
import { GeoJSON } from "react-leaflet";
import * as topojson from "topojson-client";

/**
 * topojson handler inspired by
 * https://codesandbox.io/s/using-geojson-with-tons-of-data-in-react-leaflet-v3x-topojson-sbpiw?file=/src/App.js:178-215
 *
 */

//TODO: color and borders
export default function TopoJSON(props) {
  const layerRef = useRef(null);
  const { data, ...otherProps } = props;

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
    //TODO: Make your api calls here data from feature
  }

  function handleHover(e, layer) {
    const { NAME_0, NAME_1, NAME_2 } = e?.target?.feature?.properties;
    layer.bindPopup(`${NAME_2}, ${NAME_1} state, ${NAME_0}`).openPopup(); // here add openPopup()
  }

  function onEachFeature(feature, layer) {
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
    <GeoJSON ref={layerRef} {...otherProps} onEachFeature={onEachFeature} />
  );
}
