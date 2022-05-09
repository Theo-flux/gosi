import React, { useState } from "react";
import ChartOptions from "../../ChartOptions";
import { GraphTitle, PodGrid, Pods, Topspacing } from "../../../shared";
import { BarGraph, Pie } from "../../charts";

function HouseholdInner({
    number_of_households,
    with_woman_head,
    heads_under_18,
    type_of_dwelling,
    head_by_gender,
    type_of_house_walls
}){
    const [showDwellingChartOptions, setShowDwellingChartOptions] = useState(false);
    const [dwellingChartType, setDwellingChartType] = useState("bar");

    const [showGenderChartOptions, setShowGenderChartOptions] = useState(false);
    const [genderChartType, setGenderChartType] = useState("pie");

    const [isGenderCollapsed, setGenderCollapsed] = useState(false);
    const [isDewllingCollapsed, setDwellingCollapsed] = useState(false);

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

    function handleDwellingCollapsed(){
        setDwellingCollapsed(!isDewllingCollapsed);
    }

    function handleGenderCollapsed(){
        setGenderCollapsed(!isGenderCollapsed);
    }


    const [showHouseWallsChartOptions, setShowHouseWallsChartOptions] = useState(false);
    const [HouseWallsChartType, setHouseWallsChartType] = useState("bar");

    const [isHouseWallsCollapsed, setHouseWallsCollapsed] = useState(false);

    function handleHouseWallsChartoptions(){
        setShowHouseWallsChartOptions(!showHouseWallsChartOptions);
    }

    function handleHouseWallsChartType(type){
        setShowHouseWallsChartOptions(!showHouseWallsChartOptions);
        setHouseWallsChartType(type);
    }

    function handleHouseWallsCollapsed(){
        setHouseWallsCollapsed(!isHouseWallsCollapsed);
    }

    return(
        <>
            <PodGrid>
                <Pods data={number_of_households?.toLocaleString() || `0`} text="number of households"/>
                <Pods data={`${with_woman_head || `0`}%`} text="% Households led by women"/>
                <Pods data={heads_under_18?.toLocaleString() || `0`} text="Under-18 Household head"/>
            </PodGrid>


            <Topspacing>
                <GraphTitle 
                    handleThis={handleDwellingCollapsed}
                    title="Household by type of building"
                />

                {
                    isDewllingCollapsed ||
                    <>
                        <ChartOptions
                            chartOption={showDwellingChartOptions}
                            chartOptionFunction={handleDwellingChartoptions}
                            chartTypeFunction={handleDwellingChartType}
                        />

                        {
                            dwellingChartType == "bar" ? 
                                <BarGraph isVertical="true" data={type_of_dwelling}/> 
                                : 
                                <Pie data={type_of_dwelling}/>
                        }
                    </>
                }
            </Topspacing>

            <Topspacing>
                <GraphTitle 
                    handleThis={handleHouseWallsCollapsed}
                    title="Household by Wall material"
                />

                { 
                    isHouseWallsCollapsed ||
                    <>
                    <ChartOptions
                        chartOption={showHouseWallsChartOptions}
                        chartOptionFunction={handleHouseWallsChartoptions}
                        chartTypeFunction={handleHouseWallsChartType}
                    />

                    {
                        HouseWallsChartType == "bar" ? 
                            <BarGraph data={type_of_house_walls}/> 
                            : 
                            <Pie data={type_of_house_walls}/>
                    
                    }
                    </>
                }
            </Topspacing>

            <Topspacing>
                <GraphTitle 
                    handleThis={handleGenderCollapsed}
                    title="Head of household by gender"
                />

                {
                    isGenderCollapsed ||
                    <>
                    <ChartOptions
                        chartOption={showGenderChartOptions}
                        chartOptionFunction={handleGenderChartoptions}
                        chartTypeFunction={handleGenderChartType}
                    />

                    {
                        genderChartType == "pie" ? 
                            <Pie data={head_by_gender}/> 
                            : 
                            <BarGraph data={head_by_gender}/>
                    }
                    </>
                }
            </Topspacing>
        </>
    )
}

export default HouseholdInner;