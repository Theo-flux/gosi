import React, {useContext, useEffect} from "react";
import {App} from "../../../context/applicationContext";
import { DataCardsContainer } from "../../../shared";
import ChildPopulation from "./ChildPopulation";
import School from "./School";


function Children() {
  const {graphData, openGrandChild} = useContext(App);
  let data = graphData.data?.[0];

  useEffect(() => {
    data = graphData.data?.[0]
  }, [graphData])

  const ChildrenData = {
    num_of_children: data?.number_of_children,
    in_school: data?.percent_children_in_school,
    bio_parent: data?.percent_of_children_14_with_no_liv_bio_parent,
    school_attendance: data?.children_5_to_17_by_school_attendance,
    parent_survival: data?.children_by_parent_survival,
  }

  const {
    num_of_children, 
    in_school, 
    bio_parent, 
    school_attendance, 
    parent_survival
  } = ChildrenData;

  return (
    <DataCardsContainer>
      {
        openGrandChild === 0 &&
        <ChildPopulation 
          num_of_children={num_of_children}
          bio_parent={bio_parent}
          parent_survival={parent_survival}
        />
      }

      {
        openGrandChild === 1 &&
        <School
          in_school={in_school}
          school_attendance={school_attendance}
        />
      }


    </DataCardsContainer>
  )
}

export default Children;
