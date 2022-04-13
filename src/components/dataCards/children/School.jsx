import React, { useState } from "react";
import ChartOptions from "../../ChartOptions";
import { GraphTitle, PodGrid, Pods, Topspacing } from "../../../shared";
import { BarGraph, Pie } from "../../charts";


function School({
    in_school,
    school_attendance
}){

    const [showSchoolChartOptions, setShowSchoolChartOptions] = useState(false);
    const [SchoolChartType, setSchoolChartType] = useState("bar");

    function handleSchoolChartoptions(){
        setShowSchoolChartOptions(!showSchoolChartOptions);
    }

    function handleSchoolChartType(type){
        setShowSchoolChartOptions(!showSchoolChartOptions);
        setSchoolChartType(type);
    }

    return(
        <>
            <PodGrid>
                <Pods data={`${school_attendance["No"]?.toLocaleString()}`} text="not in school"/>
                <Pods data={`${school_attendance["Yes"]?.toLocaleString()}`} text="in school"/>
                <Pods data={`${in_school}%`} text="% in school"/>
            </PodGrid>

            <Topspacing>
                <GraphTitle title="School attendance"/>

                <ChartOptions
                    chartOption={showSchoolChartOptions}
                    chartOptionFunction={handleSchoolChartoptions}
                    chartTypeFunction={handleSchoolChartType}
                />

                {
                    SchoolChartType == "bar" ? 
                        <BarGraph data={school_attendance}/> 
                        : 
                        <Pie data={school_attendance}/>
                }
            </Topspacing>
        </>
    )
}


export default School;