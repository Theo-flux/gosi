import React, { useState, useContext, useEffect } from "react";
import {App} from "../../../context/applicationContext";
import ChartOptions from "../../ChartOptions";
import { Pods } from "../../../shared";
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

    return (
        <>
            <div className="pb-4 border-b border-dashed border-neutral-400 grid grid-cols-2 gap-2 lg:grid-cols-3 gap-4">
                <Pods data={average_age} text="average age"/>
                <Pods data={median_age} text="median age" />
            </div>

            <div className="pt-4">
                <div className="md:flex justify-between items-center mb-2">
                    <p className="text-sm md:text-md font-bold">Age by range</p>
                    <i className="text-2xl ri-arrow-down-s-fill"></i>
                </div>

                <ChartOptions
                    chartOption={showAgeRangeChartOptions}
                    chartOptionFunction={handleAgeRangeChartoptions}
                    chartTypeFunction={handleAgeRangeChartType}
                />

                {
                    ageRangeChartType == "bar" ? 
                        <BarGraph data={pop_by_age_range}/> 
                        : 
                        <Pie data={pop_by_age_range}/>
                }
            </div>

            <div className="pt-4">
                <div className="md:flex justify-between items-center mb-2">
                    <p className="text-sm md:text-md font-bold">Age by category</p>
                    <i className="text-2xl ri-arrow-down-s-fill"></i>
                </div>

                <ChartOptions
                    chartOption={showAgeCategoryChartOptions}
                    chartOptionFunction={handleAgeCategoryChartoptions}
                    chartTypeFunction={handleAgeCategoryChartType}
                />

                {
                    ageCategoryChartType == "bar" ? 
                        <BarGraph data={pop_by_age_category}/> 
                        : 
                        <Pie data={pop_by_age_category}/>
                }
            </div>
            
            


        </>
    )
}

export default Age;