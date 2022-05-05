import React, { useState } from "react";
import ChartOptions from "../../ChartOptions";
import { GraphTitle, PodGrid, Pods, Topspacing } from "../../../shared";
import { BarGraph, Pie } from "../../charts";

function ChildPopulation({
    num_of_children,
    bio_parent,
    parent_survival
}){

    const [showChildChartOptions, setShowChildChartOptions] = useState(false);
    const [ChildChartType, setChildChartType] = useState("pie");

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
        </>
    )
}

export default ChildPopulation;