import React, {useContext, useEffect} from "react";
import {App} from "../../../context/applicationContext";
import { DataCardsContainer, Pods } from "../../../shared";


function Household() {
  const {graphData} = useContext(App);
  let data = graphData.data?.[0];

  useEffect(() => {
    data = graphData.data?.[0]
  }, graphData)

  const HouseholdData = {
    number_of_households: data?.number_of_hoseholds, 
    fully_owned: data?.percent_households_fully_owned,
    with_woman_head: data?.percent_households_with_woman_head,
    heads_under_18: data?.households_with_heads_under_18
  }

  const { number_of_households, fully_owned, with_woman_head, heads_under_18 } = HouseholdData;
  // console.log(graphData.data?.[0].number_of_hoseholds);

  return (
    <DataCardsContainer>
      <div className="grid grid-cols-2 gap-2 lg:grid-cols-3 gap-4">
          <Pods data={number_of_households?.toLocaleString()} text="number of households"/>
          <Pods data={`${fully_owned}%`} text="% fully owned"/>
          <Pods data={`${with_woman_head}%`} text="% with woman head"/>
          <Pods data={`${heads_under_18?.toLocaleString()}`} text="heads under 18"/>
      </div>
    </DataCardsContainer>
  )
}

export default Household;
