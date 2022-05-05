import React, {useContext, useEffect} from "react";
import {App} from "../../../context/applicationContext";
import { DataCardsContainer } from "../../../shared";
import Age from "./Age";
import Population from "./Population";
import Language from "./Language";

function Demography() {
  const {graphData, openGrandChild} = useContext(App);
  let data = graphData.data?.[0];

  useEffect(() => {
    data = graphData.data?.[0]
  }, [graphData])

  const DemographicData = {
    median_age: data?.median_age,
    average_age: data?.average_age,
    language:data?.most_spoken_language,
    population:data?.total_population,
    age_range: data?.population_by_age_range,
    pop_by_lang: data?.population_by_language_most_spoken,
    pop_by_age_range: data?.population_by_age_range,
    pop_by_age_category:data?.population_by_age_category,
    pop_by_gender: data?.population_gender,
    pop_by_highest_edu_level: data?.pop_by_highest_edu_level,
    pop_by_religion: data?.population_religion,
  }

  const {
    median_age, 
    average_age, 
    language, 
    population, 
    pop_by_lang,
    pop_by_age_category,
    pop_by_age_range,
    pop_by_gender,
    pop_by_highest_edu_level,
    pop_by_religion,
  } = DemographicData;
  return (
    <DataCardsContainer>
        {
          openGrandChild === 0 && 
          <Age 
            median_age={median_age} 
            average_age={average_age}
            pop_by_age_category={pop_by_age_category}
            pop_by_age_range={pop_by_age_range}
          />
        }

        {
          openGrandChild === 1 && 
          <Population 
            population={population}
            pop_by_gender = {pop_by_gender}
            pop_by_highest_edu_level = {pop_by_highest_edu_level}
            pop_by_religion = {pop_by_religion}
          />
        }

        {
          openGrandChild === 2 && 
          <Language 
            language={language} 
            pop_by_lang={pop_by_lang}
          />
        }
    </DataCardsContainer>
  )
}

export default Demography;
