import React, {useContext, useEffect} from "react";
import {App} from "../../../context/applicationContext";
import { DataCardsContainer } from "../../../shared";
import HouseholdInner from "./HouseholdInner";
import Ownership from "./Ownership";


function Household() {
  const {graphData, openGrandChild} = useContext(App);
  let data = graphData.data?.[0];

  useEffect(() => {
    data = graphData.data?.[0]
  }, [graphData])

  const HouseholdData = {
    number_of_households: data?.number_of_hoseholds, 
    fully_owned: data?.percent_households_fully_owned,
    with_woman_head: data?.percent_households_with_woman_head,
    heads_under_18: data?.households_with_heads_under_18,
    type_of_dwelling: data?.households_by_type_of_dwelling,
    by_ownership: data?.households_by_ownership,
    head_by_gender: data?.households_head_by_gender,
    type_of_house_walls: data?.type_of_house_walls
  }

  const { 
    number_of_households, 
    fully_owned,
    with_woman_head,
    heads_under_18,
    type_of_dwelling,
    by_ownership,
    head_by_gender,
    type_of_house_walls
  } = HouseholdData;


  return (
    <DataCardsContainer>
      {
        openGrandChild == 0 &&
          <HouseholdInner
            number_of_households={number_of_households}
            with_woman_head={with_woman_head}
            heads_under_18={heads_under_18}
            type_of_dwelling={type_of_dwelling}
            head_by_gender={head_by_gender}
            type_of_house_walls={type_of_house_walls}
          />
      }

      {
        openGrandChild == 1 &&
          <Ownership
            fully_owned={fully_owned}
            by_ownership={by_ownership}
          />
      }
    </DataCardsContainer>
  )
}

export default Household;
