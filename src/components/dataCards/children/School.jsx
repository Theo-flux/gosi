import React, { useState } from "react";
import ChartOptions from "../../ChartOptions";
import { GraphTitle, PodGrid, Pods, Topspacing } from "../../../shared";
import { BarGraph, Pie } from "../../charts";


function School({
    in_school,
    school_attendance
}){

    const [showSchoolChartOptions, setShowSchoolChartOptions] = useState(false);
    const [SchoolChartType, setSchoolChartType] = useState("pie");

    const [isSchoolCollapsed, setSchoolCollapsed] = useState(false);

    function handleSchoolChartoptions(){
        setShowSchoolChartOptions(!showSchoolChartOptions);
    }

    function handleSchoolChartType(type){
        setShowSchoolChartOptions(!showSchoolChartOptions);
        setSchoolChartType(type);
    }

    function handleSchoolCollapsed(){
        setSchoolCollapsed(!isSchoolCollapsed);
    }

    return(
        <>
            <PodGrid>
                <Pods data={`${school_attendance["No"]?.toLocaleString() || `0`}`} text="not in school"/>
                <Pods data={`${school_attendance["Yes"]?.toLocaleString() || `0`}`} text="in school"/>
                <Pods data={`${in_school || `0`}%`} text="% in school"/>
            </PodGrid>

            <Topspacing>
                <GraphTitle
                    handleThis={handleSchoolCollapsed} 
                    title="School attendance of children aged 5 to 17"
                />

                {
                    isSchoolCollapsed ||
                    <>
                    <ChartOptions
                        chartOption={showSchoolChartOptions}
                        chartOptionFunction={handleSchoolChartoptions}
                        chartTypeFunction={handleSchoolChartType}
                    />

                    {
                        SchoolChartType == "bar" ? 
                            <BarGraph isVertical="true" data={school_attendance}/> 
                            : 
                            <Pie data={school_attendance}/>
                    }
                    </>
                }
            </Topspacing>
        </>
    )
}


export default School;