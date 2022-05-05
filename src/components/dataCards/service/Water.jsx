import React, { useState } from "react";
import ChartOptions from "../../ChartOptions";
import { GraphTitle, PodGrid, Pods, Topspacing } from "../../../shared";
import { BarGraph, Pie } from "../../charts";

function Water({
    rainy_season_sources,
    dry_season_sources
}) {

    const [showRainySeasonChartOptions, setShowRainySeasonChartOptions] = useState(false);
    const [RainySeasonChartType, setRainySeasonChartType] = useState("bar");
    const [isRainySeasonCollapsed, setRainySeasonCollapsed] = useState(false);

    function handleRainySeasonChartoptions(){
        setShowRainySeasonChartOptions(!showRainySeasonChartOptions);
    }

    function handleRainySeasonChartType(type){
        setShowRainySeasonChartOptions(!showRainySeasonChartOptions);
        setRainySeasonChartType(type);
    }

    function handleRainySeasonCollapsed(){
        setRainySeasonCollapsed(!isRainySeasonCollapsed);
    }


    const [showDrySeasonChartOptions, setShowDrySeasonChartOptions] = useState(false);
    const [DrySeasonChartType, setDrySeasonChartType] = useState("bar");
    const [isDrySeasonCollapsed, setDrySeasonCollapsed] = useState(false);

    function handleDrySeasonChartoptions(){
        setShowDrySeasonChartOptions(!showDrySeasonChartOptions);
    }

    function handleDrySeasonChartType(type){
        setShowDrySeasonChartOptions(!showDrySeasonChartOptions);
        setDrySeasonChartType(type);
    }

    function handleDrySeasonCollapsed(){
        setDrySeasonCollapsed(!isDrySeasonCollapsed);
    }

    return (
        <>


            <Topspacing>
                <GraphTitle 
                    handleThis={handleDrySeasonCollapsed}
                    title="Sources of drinking water during dry season"
                />

                {   
                    isDrySeasonCollapsed ||
                    <>
                    <ChartOptions
                        chartOption={showDrySeasonChartOptions}
                        chartOptionFunction={handleDrySeasonChartoptions}
                        chartTypeFunction={handleDrySeasonChartType}
                    />

                    {
                        DrySeasonChartType == "bar" ? 
                            <BarGraph isVertical="true" data={dry_season_sources}/> 
                            : 
                            <Pie data={dry_season_sources}/>
                    }
                    </>
                }
            </Topspacing>




            <Topspacing>
                <GraphTitle 
                    handleThis={handleRainySeasonCollapsed}
                    title="Sources of drinking water during rainy season"
                />

                {   
                    isRainySeasonCollapsed ||
                    <>
                    <ChartOptions
                        chartOption={showRainySeasonChartOptions}
                        chartOptionFunction={handleRainySeasonChartoptions}
                        chartTypeFunction={handleRainySeasonChartType}
                    />

                    {
                        RainySeasonChartType == "bar" ? 
                            <BarGraph isVertical="true" data={rainy_season_sources}/> 
                            : 
                            <Pie data={rainy_season_sources}/>
                    }
                    </>
                }
            </Topspacing>
        </>
    )
}

export default Water;
