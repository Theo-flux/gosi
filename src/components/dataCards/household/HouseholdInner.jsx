import React, { useState } from "react";
import ChartOptions from "../../ChartOptions";
import { GraphTitle, PodGrid, Pods, Topspacing } from "../../../shared";
import { BarGraph, Pie } from "../../charts";

function HouseholdInner({
    number_of_households,
    with_woman_head,
    heads_under_18,
    type_of_dwelling,
    head_by_gender
}){
    const [showDwellingChartOptions, setShowDwellingChartOptions] = useState(false);
    const [dwellingChartType, setDwellingChartType] = useState("bar");

    const [showGenderChartOptions, setShowGenderChartOptions] = useState(false);
    const [genderChartType, setGenderChartType] = useState("bar");

    function handleDwellingChartoptions(){
        setShowDwellingChartOptions(!showDwellingChartOptions);
    }

    function handleDwellingChartType(type){
        setShowDwellingChartOptions(!showDwellingChartOptions);
        setDwellingChartType(type);
    }

    function handleGenderChartoptions(){
        setShowGenderChartOptions(!showGenderChartOptions);
    }

    function handleGenderChartType(type){
        setShowGenderChartOptions(!showGenderChartOptions);
        setGenderChartType(type);
    }

    return(
        <>
            <PodGrid>
                <Pods data={number_of_households?.toLocaleString()} text="number of households"/>
                <Pods data={`${with_woman_head}%`} text="% with woman head"/>
                <Pods data={`${heads_under_18?.toLocaleString()}`} text="heads under 18"/>
            </PodGrid>


            <Topspacing>
                <GraphTitle title="household by dwelling type"/>

                <ChartOptions
                    chartOption={showDwellingChartOptions}
                    chartOptionFunction={handleDwellingChartoptions}
                    chartTypeFunction={handleDwellingChartType}
                />

                {
                    dwellingChartType == "bar" ? 
                        <BarGraph data={type_of_dwelling}/> 
                        : 
                        <Pie data={type_of_dwelling}/>
                }
            </Topspacing>

            <Topspacing>
                <GraphTitle title="household head by gender"/>

                <ChartOptions
                    chartOption={showGenderChartOptions}
                    chartOptionFunction={handleGenderChartoptions}
                    chartTypeFunction={handleGenderChartType}
                />

                {
                    genderChartType == "bar" ? 
                        <BarGraph data={head_by_gender}/> 
                        : 
                        <Pie data={head_by_gender}/>
                }
            </Topspacing>
        </>
    )
}

export default HouseholdInner;