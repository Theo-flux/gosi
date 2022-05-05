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
    const [isToiletCollapsed, setToiletCollapsed] = useState(false);

    function handleToiletChartoptions(){
        setShowToiletChartOptions(!showToiletChartOptions);
    }

    function handleToiletChartType(type){
        setShowToiletChartOptions(!showToiletChartOptions);
        setToiletChartType(type);
    }

    function handleToiletCollapsed(){
        setToiletCollapsed(!isToiletCollapsed);
    }

    return (
        <>
            <PodGrid>
                <Pods data={`${chem_or_flush_toilet || `0`}%`} text="have access to flushing system"/>
                <Pods data={`${no_access_to_toilet || `0`}%`} text="have no access to toilet"/>
            </PodGrid>

            <Topspacing>
                <GraphTitle 
                    handleThis={handleToiletCollapsed}
                    title="Access to toilet facilities"
                />

                {   
                    isToiletCollapsed ||
                    <>
                    <ChartOptions
                        chartOption={showToiletChartOptions}
                        chartOptionFunction={handleToiletChartoptions}
                        chartTypeFunction={handleToiletChartType}
                    />

                    {
                        toiletChartType == "bar" ? 
                            <BarGraph isVertical="true" data={population_by_toilet_facilities}/> 
                            : 
                            <Pie data={population_by_toilet_facilities}/>
                    }
                    </>
                }
            </Topspacing>
        </>
    )
}

export default ToiletFacilities;
