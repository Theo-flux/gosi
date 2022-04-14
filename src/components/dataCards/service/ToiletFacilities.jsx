import React, { useState } from "react";
import ChartOptions from "../../ChartOptions";
import { GraphTitle, PodGrid, Pods, Topspacing } from "../../../shared";
import { BarGraph, Pie } from "../../charts";

function ToiletFacilities({
    chem_or_flush_toilet,
    no_access_to_toilet,
    population_by_toilet_facilities
}) {

    const [showToiletChartOptions, setShowToiletChartOptions] = useState(false);
    const [toiletChartType, setToiletChartType] = useState("bar");

    function handleToiletChartoptions(){
        setShowToiletChartOptions(!showToiletChartOptions);
    }

    function handleToiletChartType(type){
        setShowToiletChartOptions(!showToiletChartOptions);
        setToiletChartType(type);
    }

    return (
        <>
            <PodGrid>
                <Pods data={`${chem_or_flush_toilet || `0`}%`} text="have access to chem or flush toilet"/>
                <Pods data={`${no_access_to_toilet || `0`}%`} text="have no access to toilet"/>
            </PodGrid>

            <Topspacing>
                <GraphTitle title="household by dwelling type"/>

                <ChartOptions
                    chartOption={showToiletChartOptions}
                    chartOptionFunction={handleToiletChartoptions}
                    chartTypeFunction={handleToiletChartType}
                />

                {
                    toiletChartType == "bar" ? 
                        <BarGraph data={population_by_toilet_facilities}/> 
                        : 
                        <Pie data={population_by_toilet_facilities}/>
                }
            </Topspacing>
        </>
    )
}

export default ToiletFacilities;
