import React, { useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import Select from "react-select";
import lgaAreasIncomplete from "../data/lgaListIncomplete.json";
import stateAreas from "../data/statesList.json";
import { lgaSuffix, stateSuffix } from "../utils/constants";

const areas = [...stateAreas, ...lgaAreasIncomplete];
const customStyles = {
  container: (provided) => ({
    ...provided,
    border: 0,
    width: "100%",
  }),
  control: (provided) => ({
    ...provided,
    border: 0,
    width: "100%",
    minWidth: "100%",
    boxShadow: "none",
    background: "inherit",
  }),
  indicatorsContainer: (provided) => ({
    ...provided,
    display: "none",
  }),
  menu: (provided) => ({
    ...provided,
    border: 0,
    width: "max-content",
    minWidth: "100%",
    zIndex: "406",
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "#9CA3AF",
    fontWeight: 500,
    fontSize: "14px",
    lineHeight: "20px",
    /* or 143% */

    display: "flex",
    alignItems: "center",
    letterSpacing: "-0.02em",
  }),
};
function Search({ variant }) {
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();

  const handleClick = () => {
    if (selected?.state) {
      // check for LGA
      if (
        selected.state.toLowerCase() ===
        "Federal Capital Territory".toLowerCase()
      )
        navigate({
          pathname: `/profiles/${"Federal Capital Territory"}/${
            selected.value
          }${lgaSuffix}`,
          search: createSearchParams({
            lng: selected.lng,
            lat: selected.lat,
          }).toString(),
        });
      else
        navigate({
          pathname: `/profiles/${encodeURIComponent(
            selected.state
          )}${stateSuffix}/${encodeURIComponent(selected.value)}${lgaSuffix}`,
          search: createSearchParams({
            lng: selected.lng,
            lat: selected.lat,
          }).toString(),
        });
    } else if (selected.value) {
      // Check for state
      if (
        selected.value.toLowerCase() ===
        "Federal Capital Territory".toLowerCase()
      )
        navigate({
          pathname: `/profiles/${"Federal Capital Territory"}`,
          search: createSearchParams({
            lng: selected.lng,
            lat: selected.lat,
          }).toString(),
        });
      else
        navigate({
          pathname: `/profiles/${encodeURIComponent(
            selected.value
          )}${stateSuffix}`,
          search: createSearchParams({
            lng: selected.lng,
            lat: selected.lat,
          }).toString(),
        });
    }
  };

  return (
    <div
      className={`rounded-lg py-1 px-1 max-w-[656px] mx-auto flex justify-between items-center  ${
        variant === "nav"
          ? "min-w-[360px] bg-neutral-200"
          : "md:py-2 md:px-2 min-w-[300px] bg-white "
      }`}
      style={{
        boxShadow:
          variant === "nav" ? "" : "0px 2px 19px rgba(139, 153, 148, 0.1)",
      }}
    >
      <div
        className={`w-[80%]  px-1 bg-inherit flex items-center md:px-2 mr-2 ${
          variant === "nav" ? "" : "py-2 md:py-4"
        }`}
      >
        <i className="text-xl font-medium mr-2 text-neutral-400 ri-search-2-line"></i>
        <Select
          className="basic-single"
          classNamePrefix="select"
          placeholder="Search for a location e.g Lagos"
          isSearchable
          name="color"
          options={areas}
          styles={customStyles}
          onChange={(option) => setSelected(option)}
        />
      </div>
      <button
        onClick={selected && handleClick}
        className={`outline-0 bg-primary-600 text-white rounded-md  focus:bg-primary-700 cursor-pointer ${
          variant === "nav" ? "py-1.5 px-3.5" : "py-2 px-4 md:py-4 md:px-8"
        }`}
      >
        Search
      </button>
    </div>
  );
}

export default Search;
