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

    const [showNoElectricityChartOptions, setShowNoElectricityChartOptions] = useState(false);
    const [noelectricityChartType, setNoElectricityChartType] = useState("bar");

    const [isNoElectricityCollapsed, setNoElectricityCollapsed] = useState(false);

    function handleNoElectricityChartoptions(){
        setShowNoElectricityChartOptions(!showNoElectricityChartOptions);
    }

    function handleNoElectricityChartType(type){
        setShowNoElectricityChartOptions(!showNoElectricityChartOptions);
        setNoElectricityChartType(type);
    }

    function handleNoElectricityCollapsed(){
        setNoElectricityCollapsed(!isNoElectricityCollapsed);
    }


    const population_by_electricity_accessNo  = 
        Object.keys(population_by_electricity_access).filter(k => k.charAt(0) === "N" && k.charAt(1) === "o")
        .reduce((obj, key) => Object.assign(obj, {[key]: population_by_electricity_access[key]}), {})

    const population_by_electricity_accessYes  = 
        Object.keys(population_by_electricity_access).filter(k => k.charAt(0) !== "N" && k.charAt(1) !== "o")
        .reduce((obj, key) => Object.assign(obj, {[key]: population_by_electricity_access[key]}), {})


    return(
        <>
            <PodGrid>
                <Pods data={`${no_access_to_electricity || `0`}%`} text="% have no access to PHCN"/>
            </PodGrid>


            <Topspacing>
                <GraphTitle
                    handleThis={handleElectricityCollapsed} 
                    title="Households' access to power"
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
                        <BarGraph isVertical="true" data={population_by_electricity_accessYes}/> 
                        : 
                        <Pie data={population_by_electricity_accessYes}/>
                }
                </>
            }
            </Topspacing>


            <Topspacing>
                <GraphTitle
                    handleThis={handleNoElectricityCollapsed} 
                    title="Households' with no access to power"
                />

            {
                isNoElectricityCollapsed ||
                <>
                <ChartOptions
                    chartOption={showNoElectricityChartOptions}
                    chartOptionFunction={handleNoElectricityChartoptions}
                    chartTypeFunction={handleNoElectricityChartType}
                />

                {
                    noelectricityChartType == "bar" ? 
                        <BarGraph isVertical="true" data={population_by_electricity_accessNo}/> 
                        : 
                        <Pie data={population_by_electricity_accessNo}/>
                }
                </>
            }
            </Topspacing>
        </>
    )
}

export default Electricity;