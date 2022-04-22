import React, { useState } from "react";
import ChartOptions from "../../ChartOptions";
import { GraphTitle, PodGrid, Pods, Topspacing } from "../../../shared";
import { BarGraph, Pie } from "../../charts";

function Age({
    median_age, 
    average_age, 
    pop_by_age_category, 
    pop_by_age_range
}) {
    
    const [showAgeCategoryChartOptions, setShowAgeCategoryChartOptions] = useState(false);
    const [ageCategoryChartType, setAgeCategoryChartType] = useState("bar");

    const [showAgeRangeChartOptions, setShowAgeRangeChartOptions] = useState(false);
    const [ageRangeChartType, setAgeRangeChartType] = useState("bar");

    const [isAgeCategoryCollapsed, setAgeCategoryCollapsed] = useState(false);
    const [isAgeRangeCollapsed, setAgeRangeCollapsed] = useState(false);

    function handleAgeCategoryChartoptions(){
        setShowAgeCategoryChartOptions(!showAgeCategoryChartOptions);
    }

    function handleAgeCategoryChartType(type){
        setShowAgeCategoryChartOptions(!showAgeCategoryChartOptions);
        setAgeCategoryChartType(type);
    }

    function handleAgeRangeChartoptions(){
        setShowAgeRangeChartOptions(!showAgeRangeChartOptions);
    }

    function handleAgeRangeChartType(type){
        setShowAgeRangeChartOptions(!showAgeRangeChartOptions);
        setAgeRangeChartType(type);
    }

    function handleAgeCategoryCollapsed(){
        setAgeCategoryCollapsed(!isAgeCategoryCollapsed);
    }

    function handleAgeRangeCollapsed(){
        setAgeRangeCollapsed(!isAgeRangeCollapsed);
    }

  

    return (
        <>
            <PodGrid>
                <Pods data={average_age || `0`} text="average age"/>
                <Pods data={median_age || `0`} text="median age" />
            </PodGrid>

            <Topspacing>
                <GraphTitle 
                    handleThis={handleAgeRangeCollapsed}
                    title="Age by range"
                />

                { 
                    isAgeRangeCollapsed ||
                    <>
                    <ChartOptions
                            chartOption={showAgeRangeChartOptions}
                            chartOptionFunction={handleAgeRangeChartoptions}
                            chartTypeFunction={handleAgeRangeChartType}
                        />

                    {
                        ageRangeChartType == "bar" ? 
                            <BarGraph isVertical="true" data={pop_by_age_range}/> 
                            : 
                            <Pie data={pop_by_age_range}/>
                    }
                    </>
                }
            </Topspacing>

            <Topspacing>
                <GraphTitle
                    handleThis={handleAgeCategoryCollapsed}
                    title="Age by category"
                />

                {    
                    isAgeCategoryCollapsed ||
                    <>
                        <ChartOptions
                            chartOption={showAgeCategoryChartOptions}
                            chartOptionFunction={handleAgeCategoryChartoptions}
                            chartTypeFunction={handleAgeCategoryChartType}
                        />

                        {
                            ageCategoryChartType == "bar" ? 
                                <BarGraph isVertical="true" data={pop_by_age_category}/> 
                                : 
                                <Pie data={pop_by_age_category}/>
                        }
                    </>
                }
            </Topspacing>
        </>
    )
}

export default Age