import React, {useContext, useEffect} from "react";
import {App} from "../../../context/applicationContext";
import { DataCardsContainer } from "../../../shared";
import ToiletFacilities from "./ToiletFacilities";
import Water from "./Water";
import RefuseDisposal from "./RefuseDisposal";
import Electricity from "./Electricity";

function Service() {
  const {graphData, openGrandChild} = useContext(App);
  let data = graphData.data?.[0];

  useEffect(() => {
    data = graphData.data?.[0]
  }, [graphData])

  const serviceData = {
    refuse_collected: data?.percent_get_refuse_collected_by_govt_or_priv_comp,
    chem_or_flush_toilet: data?.percent_have_access_to_chem_or_flush_toilet,
    no_access_to_toilet: data?.percent_have_no_access_to_toilet,
    no_access_to_electricity: data?.percent_with_no_access_to_electricity,
    population_by_electricity_access: data?.population_by_electricity_access,
    population_by_refuse_disposal: data?.population_by_refuse_disposal,
    population_by_toilet_facilities: data?.population_by_toilet_facilities
  }

  const { 
    refuse_collected,
    chem_or_flush_toilet,
    no_access_to_toilet,
    no_access_to_electricity,
    population_by_electricity_access,
    population_by_refuse_disposal,
    population_by_toilet_facilities,
  } = serviceData;

  return (
    <DataCardsContainer>

      {
        openGrandChild == 1 &&
          <Electricity
            no_access_to_electricity={no_access_to_electricity}
            population_by_electricity_access={population_by_electricity_access}
          />
      }

      {
        openGrandChild == 2 &&
          <ToiletFacilities
            chem_or_flush_toilet={chem_or_flush_toilet}
            no_access_to_toilet={no_access_to_toilet}
            population_by_toilet_facilities={population_by_toilet_facilities}
          />
      }

      {
        openGrandChild == 3 &&
          <RefuseDisposal 
          refuse_collected={refuse_collected}
          population_by_refuse_disposal={population_by_refuse_disposal}
          />
      }
    </DataCardsContainer>
  )
}

export default Service;
