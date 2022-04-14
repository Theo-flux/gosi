import React, { useState } from "react";
import ChartOptions from "../../ChartOptions";
import { GraphTitle, PodGrid, Pods, Topspacing } from "../../../shared";
import { BarGraph, Pie } from "../../charts";

function Electricity({
    no_access_to_electricity,
    population_by_electricity_access
}){
    
    const [showElectricityChartOptions, setShowElectricityChartOptions] = useState(false);
    const [electricityChartType, setElectricityChartType] = useState("bar");

    function handleElectricityChartoptions(){
        setShowElectricityChartOptions(!showElectricityChartOptions);
    }

    function handleElectricityChartType(type){
        setShowElectricityChartOptions(!showElectricityChartOptions);
        setElectricityChartType(type);
    }

    return(
        <>
            <PodGrid>
                <Pods data={`${no_access_to_electricity}%`} text="have no access to electricity"/>
            </PodGrid>


            <Topspacing>
                <GraphTitle title="Population by access to electricity"/>

                <ChartOptions
                    chartOption={showElectricityChartOptions}
                    chartOptionFunction={handleElectricityChartoptions}
                    chartTypeFunction={handleElectricityChartType}
                />

                {
                    electricityChartType == "bar" ? 
                        <BarGraph data={population_by_electricity_access}/> 
                        : 
                        <Pie data={population_by_electricity_access}/>
                }
            </Topspacing>
        </>
    )
}

export default Electricity;