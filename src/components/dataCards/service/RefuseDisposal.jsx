import React, { useState } from "react";
import ChartOptions from "../../ChartOptions";
import { GraphTitle, PodGrid, Pods, Topspacing } from "../../../shared";
import { BarGraph, Pie } from "../../charts";


function RefuseDisposal({
    refuse_collected,
    population_by_refuse_disposal
}) {

    const [showRefuseChartOptions, setShowRefuseChartOptions] = useState(false);
    const [refuseChartType, setRefuseChartType] = useState("bar");

    function handleRefuseChartoptions(){
        setShowRefuseChartOptions(!showRefuseChartOptions);
    }

    function handleRefuseChartType(type){
        setShowRefuseChartOptions(!showRefuseChartOptions);
        setRefuseChartType(type);
    }

    return (
        <>
             <PodGrid>
                <Pods data={`${refuse_collected}%`} text="refuse collected"/>
            </PodGrid>


            <Topspacing>
                <GraphTitle title="Population by refuse disposal"/>

                <ChartOptions
                    chartOption={showRefuseChartOptions}
                    chartOptionFunction={handleRefuseChartoptions}
                    chartTypeFunction={handleRefuseChartType}
                />

                {
                    refuseChartType == "bar" ? 
                        <BarGraph data={population_by_refuse_disposal}/> 
                        : 
                        <Pie data={population_by_refuse_disposal}/>
                }
            </Topspacing>
        </>
    )
}

export default RefuseDisposal;
