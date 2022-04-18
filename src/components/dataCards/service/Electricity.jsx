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

    const [isElectricityCollapsed, setElectricityCollapsed] = useState(false);

    function handleElectricityChartoptions(){
        setShowElectricityChartOptions(!showElectricityChartOptions);
    }

    function handleElectricityChartType(type){
        setShowElectricityChartOptions(!showElectricityChartOptions);
        setElectricityChartType(type);
    }

    function handleElectricityCollapsed(){
        setElectricityCollapsed(!isElectricityCollapsed);
    }

    return(
        <>
            <PodGrid>
                <Pods data={`${no_access_to_electricity || `0`}%`} text="have no access to electricity"/>
            </PodGrid>


            <Topspacing>
                <GraphTitle
                    handleThis={handleElectricityCollapsed} 
                    title="Population by access to electricity"
                />

            {
                isElectricityCollapsed ||
                <>
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
                </>
            }
            </Topspacing>
        </>
    )
}

export default Electricity;