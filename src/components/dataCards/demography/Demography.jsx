import React, {useContext, useEffect} from "react";
import {App} from "../../../context/applicationContext";
import { BarGraph, Pie } from "../../charts";
import { DataCardsContainer, Pods } from "../../../shared";

function Demography() {
  const {graphData, openGrandChild} = useContext(App);
  let data = graphData.data?.[0];

  useEffect(() => {
    data = graphData.data?.[0]
  }, graphData)

  const DemographicData = {
    median_age: data?.median_age,
    average_age: data?.average_age,
    language:data?.most_spoken_language,
    population:data?.total_population,
    age_range: data?.population_by_age_range,
    pop_by_lang: data?.population_by_language_most_spoken
  }

  const {median_age, average_age, language, population, pop_by_lang} = DemographicData;
  return (
    <DataCardsContainer>
      <div className="grid grid-cols-2 gap-2 lg:grid-cols-3 gap-4">

        {
          openGrandChild === 0 &&
          <>
            <Pods data={average_age} text="average age"/>
            <Pods data={median_age} text="median age" />
          </>
        } 

        {
          openGrandChild === 1 && <Pods data={population?.toLocaleString()} text="population" />
        }

        {
          openGrandChild === 2 && <Pods data={language} text="most spoken language" />
        }
        
        
      </div>
      
    </DataCardsContainer>
  )
}

export default Demography;
