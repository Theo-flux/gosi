import React, { useState } from "react";
import ChartOptions from "../../ChartOptions";
import { GraphTitle, PodGrid, Pods, Topspacing } from "../../../shared";
import { BarGraph, Pie } from "../../charts";

function Ownership({
    fully_owned,
    by_ownership
}){

    const [showOnwershipChartOptions, setShowOnwershipChartOptions] = useState(false);
    const [OnwershipChartType, setOnwershipChartType] = useState("bar");

    function handleOnwershipChartoptions(){
        setShowOnwershipChartOptions(!showOnwershipChartOptions);
    }

    function handleOnwershipChartType(type){
        setShowOnwershipChartOptions(!showOnwershipChartOptions);
        setOnwershipChartType(type);
    }

    return (
        <>
            <PodGrid>
                <Pods data={`${fully_owned || `0`}%`} text="% fully owned"/>
            </PodGrid>

            <Topspacing>
                <GraphTitle title="household by Onwership type"/>

                <ChartOptions
                    chartOption={showOnwershipChartOptions}
                    chartOptionFunction={handleOnwershipChartoptions}
                    chartTypeFunction={handleOnwershipChartType}
                />

                {
                    OnwershipChartType == "bar" ? 
                        <BarGraph data={by_ownership}/> 
                        : 
                        <Pie data={by_ownership}/>
                }
            </Topspacing>

        </>
    )
}

export default Ownership;
