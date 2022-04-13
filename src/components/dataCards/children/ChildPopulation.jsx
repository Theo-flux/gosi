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
    const [ChildChartType, setChildChartType] = useState("bar");

    function handleChildChartoptions(){
        setShowChildChartOptions(!showChildChartOptions);
    }

    function handleChildChartType(type){
        setShowChildChartOptions(!showChildChartOptions);
        setChildChartType(type);
    }

    return(
        <>
            <PodGrid>
                <Pods data={num_of_children?.toLocaleString()} text="child population"/>
                <Pods data={`${bio_parent}%`} text="% with dead parents"/>
            </PodGrid>

            <Topspacing>
                <GraphTitle title="Children by parent survival"/>

                <ChartOptions
                    chartOption={showChildChartOptions}
                    chartOptionFunction={handleChildChartoptions}
                    chartTypeFunction={handleChildChartType}
                />

                {
                    ChildChartType == "bar" ? 
                        <BarGraph data={parent_survival}/> 
                        : 
                        <Pie data={parent_survival}/>
                }
            </Topspacing>
        </>
    )
}

export default ChildPopulation;