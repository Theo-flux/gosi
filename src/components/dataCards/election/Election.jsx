import React, { useContext, useEffect } from "react";
import { App } from "../../../context/applicationContext";
import { DataCardsContainer, Pods } from "../../../shared";
import Election11 from "./Election_11";
import Election15 from "./Election_15";
import Election19 from "./Election_19";

function Election() {
  const { graphData, openGrandChild } = useContext(App);
  let data = graphData.data?.[0];

  useEffect(() => {
    data = graphData.data?.[0];
  }, [graphData]);

  const ElectionData = {
    election_data: data?.election_data,
  };

  const { election_data } = ElectionData;

  return (
    <DataCardsContainer className="">
      {openGrandChild === 0 && (
        <Election11 data_11={election_data?.["2011_data"]} />
      )}

      {openGrandChild === 1 && (
        <Election15 data_15={election_data?.["2015_data"]} />
      )}

      {openGrandChild === 2 && (
        <Election19 data_19={election_data?.["2019_data"]} />
      )}
    </DataCardsContainer>
  );
}

export default Election;
