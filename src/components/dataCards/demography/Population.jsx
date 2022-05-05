import React, { useState } from "react";
import ChartOptions from "../../ChartOptions";
import { GraphTitle, PodGrid, Pods, Topspacing } from "../../../shared";
import { BarGraph, Pie } from "../../charts";

function Population({
    population,
    pop_by_gender,
    pop_by_highest_edu_level,
    pop_by_religion
}) {

    const [showPopByReligionChartOptions, setShowPopByReligionChartOptions] = useState(false);
    const [PopByReligionChartType, setPopByReligionChartType] = useState("bar");

    const [showPopByGenderChartOptions, setShowPopByGenderChartOptions] = useState(false);
    const [PopByGenderChartType, setPopByGenderChartType] = useState("pie");

    const [showPopByEduChartOptions, setShowPopByEduChartOptions] = useState(false);
    const [PopByEduChartType, setPopByEduChartType] = useState("bar");

    const [isPopByGenderCollapsed, setPopByGenderCollapsed] = useState(false);
    const [isPopByEduCollapsed, setPopByEduCollapsed] = useState(false);
    const [isPopByReligionCollapsed, setPopByReligionCollapsed] = useState(false);

    function handlePopByReligionChartoptions(){
        setShowPopByReligionChartOptions(!showPopByReligionChartOptions);
    }

    function handlePopByReligionChartType(type){
        setShowPopByReligionChartOptions(!showPopByReligionChartOptions);
        setPopByReligionChartType(type);
    }

    function handlePopByGenderChartoptions(){
        setShowPopByGenderChartOptions(!showPopByGenderChartOptions);
    }

    function handlePopByGenderChartType(type){
        setShowPopByGenderChartOptions(!showPopByGenderChartOptions);
        setPopByGenderChartType(type);
    }

    function handlePopByEduChartoptions(){
        setShowPopByEduChartOptions(!showPopByEduChartOptions);
    }

    function handlePopByEduChartType(type){
        setShowPopByEduChartOptions(!showPopByEduChartOptions);
        setPopByEduChartType(type);
    }

    function handlePopByGenderCollapsed(){
        setPopByGenderCollapsed(!isPopByGenderCollapsed);
    }

    function handlePopByEduCollapsed(){
        setPopByEduCollapsed(!isPopByEduCollapsed);
    }

    function handlePopByReligionCollapsed(){
        setPopByReligionCollapsed(!isPopByReligionCollapsed);
    }

    return (
        <>
            <PodGrid>
                <Pods data={population?.toLocaleString() || `0`} text="population" />
            </PodGrid>

            <Topspacing>
                <GraphTitle
                    handleThis={handlePopByGenderCollapsed}
                    title="Population by gender"
                />

                {    
                    isPopByGenderCollapsed ||
                    <>
                        <ChartOptions
                            chartOption={showPopByGenderChartOptions}
                            chartOptionFunction={handlePopByGenderChartoptions}
                            chartTypeFunction={handlePopByGenderChartType}
                        />

                        {
                            PopByGenderChartType == "pie" ? 
                                <Pie data={pop_by_gender}/>
                                : 
                                <BarGraph isVertical="true" data={pop_by_gender}/> 
                                
                        }
                    </>
                }
            </Topspacing>

            <Topspacing>
                <GraphTitle
                    handleThis={handlePopByReligionCollapsed}
                    title="Population by religion"
                />

                {    
                    isPopByReligionCollapsed ||
                    <>
                        <ChartOptions
                            chartOption={showPopByReligionChartOptions}
                            chartOptionFunction={handlePopByReligionChartoptions}
                            chartTypeFunction={handlePopByReligionChartType}
                        />

                        {
                            PopByReligionChartType == "pie" ? 
                                <Pie data={pop_by_religion}/>
                                : 
                                <BarGraph isVertical="true" data={pop_by_religion}/> 
                                
                        }
                    </>
                }
            </Topspacing>

            <Topspacing>
                <GraphTitle 
                    handleThis={handlePopByEduCollapsed}
                    title="Population by highest educational level"
                />

                { 
                    isPopByEduCollapsed ||
                    <>
                    <ChartOptions
                            chartOption={showPopByEduChartOptions}
                            chartOptionFunction={handlePopByEduChartoptions}
                            chartTypeFunction={handlePopByEduChartType}
                        />

                    {
                        PopByEduChartType == "bar" ? 
                            <BarGraph isVertical="true" data={pop_by_highest_edu_level}/> 
                            : 
                            <Pie data={pop_by_highest_edu_level}/>
                    }
                    </>
                }
            </Topspacing>
        </>
    )
}


export default Population;