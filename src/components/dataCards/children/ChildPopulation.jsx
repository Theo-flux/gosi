import React, { useState } from "react";
import ChartOptions from "../../ChartOptions";
import { GraphTitle, PodGrid, Pods, Topspacing } from "../../../shared";
import { BarGraph, Pie } from "../../charts";

function ChildPopulation({
    num_of_children,
    bio_parent,
    parent_survival,
    children_gender_under_18
}){

    const [showChildChartOptions, setShowChildChartOptions] = useState(false);
    const [ChildChartType, setChildChartType] = useState("bar");

    const [isChildCollapsed, setChildCollapsed] = useState(false)

    function handleChildChartoptions(){
        setShowChildChartOptions(!showChildChartOptions);
    }

    function handleChildChartType(type){
        setShowChildChartOptions(!showChildChartOptions);
        setChildChartType(type);
    }

    function handleChildCollapsed(){
        setChildCollapsed(!isChildCollapsed);
    }


    const [showGenderChartOptions, setShowGenderChartOptions] = useState(false);
    const [GenderChartType, setGenderChartType] = useState("pie");

    const [isGenderCollapsed, setGenderCollapsed] = useState(false)


    function handleGenderChartoptions(){
        setShowGenderChartOptions(!showGenderChartOptions);
    }

    function handleGenderChartType(type){
        setShowGenderChartOptions(!showGenderChartOptions);
        setGenderChartType(type);
    }

    function handleGenderCollapsed(){
        setGenderCollapsed(!isGenderCollapsed);
    }

    return(
        <>
            <PodGrid>
                <Pods data={num_of_children?.toLocaleString() || `0`} text="child population"/>
                <Pods data={`${bio_parent || `0`}%`} text="% with dead parents"/>
            </PodGrid>

            <Topspacing>
                <GraphTitle 
                    handleThis={handleChildCollapsed}
                    title="Children Under-14 and parental status"
                />

            {
                isChildCollapsed ||
                <>
                <ChartOptions
                    chartOption={showChildChartOptions}
                    chartOptionFunction={handleChildChartoptions}
                    chartTypeFunction={handleChildChartType}
                />

                {
                    ChildChartType == "bar" ? 
                        <BarGraph isVertical="true" data={parent_survival}/> 
                        : 
                        <Pie data={parent_survival}/>
                }
                </>
            }
            </Topspacing>

            <Topspacing>
                <GraphTitle 
                    handleThis={handleChildCollapsed}
                    title="Gender of Children Under-18"
                />

            {
                isChildCollapsed ||
                <>
                <ChartOptions
                    chartOption={showGenderChartOptions}
                    chartOptionFunction={handleGenderChartoptions}
                    chartTypeFunction={handleGenderChartType}
                />

                {
                    GenderChartType == "bar" ? 
                        <BarGraph isVertical="true" data={children_gender_under_18}/> 
                        : 
                        <Pie data={children_gender_under_18}/>
                }
                </>
            }
            </Topspacing>
        </>
    )
}

export default ChildPopulation;