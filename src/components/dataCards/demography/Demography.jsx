import React, {useContext, useEffect} from "react";
import {App} from "../../../context/applicationContext";
import { DataCardsContainer, Pods } from "../../../shared";

function Demography() {
  const {graphData} = useContext(App);
  let data = graphData.data?.[0];

  useEffect(() => {
    data = graphData.data?.[0]
  }, graphData)

  const DemographicData = {
    median_age: data?.median_age,
    average_age: data?.average_age,
    language:data?.most_spoken_language,
    population:data?.total_population,
    age_range: data?.population_by_age_range
  }

  const {median_age, average_age, language, population} = DemographicData;
  return (
    <DataCardsContainer>
      <div className="grid grid-cols-2 gap-2 lg:grid-cols-3 gap-4">
        <Pods data={population?.toLocaleString()} text="population" />  
        <Pods data={language} text="most spoken language" />
        <Pods data={average_age} text="average age"/>
        <Pods data={median_age} text="median age" />
      </div>
    </DataCardsContainer>
  )
}

export default Demography;
