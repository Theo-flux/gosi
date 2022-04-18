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
    const [isRefuseCollapsed, setRefuseCollapsed] = useState(false);

    function handleRefuseChartoptions(){
        setShowRefuseChartOptions(!showRefuseChartOptions);
    }

    function handleRefuseChartType(type){
        setShowRefuseChartOptions(!showRefuseChartOptions);
        setRefuseChartType(type);
    }

    function handleRefuseCollapsed(){
        setRefuseCollapsed(!isRefuseCollapsed);
    }

    return (
        <>
             <PodGrid>
                <Pods data={`${refuse_collected || `0`}%`} text="refuse collected"/>
            </PodGrid>


            <Topspacing>
                <GraphTitle 
                    handleThis={handleRefuseCollapsed}
                    title="Population by refuse disposal"
                />

                {   
                    isRefuseCollapsed ||
                    <>
                    <ChartOptions
                        chartOption={showRefuseChartOptions}
                        chartOptionFunction={handleRefuseChartoptions}
                        chartTypeFunction={handleRefuseChartType}
                    />

                    {
                        refuseChartType == "bar" ? 
                            <BarGraph isVertical="true" data={population_by_refuse_disposal}/> 
                            : 
                            <Pie data={population_by_refuse_disposal}/>
                    }
                    </>
                }
            </Topspacing>
        </>
    )
}

export default RefuseDisposal;
