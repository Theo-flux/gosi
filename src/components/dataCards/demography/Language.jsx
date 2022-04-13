import React, { useState, useContext, useEffect } from "react";
import {App} from "../../../context/applicationContext";
import ChartOptions from "../../ChartOptions";
import { GraphTitle, PodGrid, Pods, Topspacing } from "../../../shared";
import { BarGraph, Pie } from "../../charts";


function Language({
    language, 
    pop_by_lang
}) {
    const [showLangChartOptions, setShowLangChartOptions] = useState(false);
    const [langChartType, setLangChartType] = useState("bar");

    function handleLangChartoptions(){
        setShowLangChartOptions(!showLangChartOptions);
    }

    function handleLangChartType(type){
        setShowLangChartOptions(!showLangChartOptions);
        setLangChartType(type);
    }

    return (
        <>
            <PodGrid>
                <Pods data={language} text="most spoken language" />
            </PodGrid>

            <Topspacing>
                <GraphTitle title="Most spoken languages"/>

                <ChartOptions
                    chartOption={showLangChartOptions}
                    chartOptionFunction={handleLangChartoptions}
                    chartTypeFunction={handleLangChartType}
                />

                {
                    langChartType == "bar" ? 
                        <BarGraph data={pop_by_lang}/> 
                        : 
                        <Pie data={pop_by_lang}/>
                }
            </Topspacing>
        </>
    )
}

export default Language;