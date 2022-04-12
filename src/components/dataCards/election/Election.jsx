import React, {useContext} from "react";
import {App} from "../../../context/applicationContext";
import {DataCardsContainer, Pods} from "../../../shared";
import {BarGraph, Pie} from "../../charts";
import ChartOptions from "../../ChartOptions";

function Election(){
    const {chartType, showChartOptions, handleChartType, handleChartoptions} = useContext(App);

    return (
        <DataCardsContainer className="">
            <div className="hidden lg:flex justify-between items-center w-[85%]">
                <Pods data="192,190" text="Number of Registered Voters"/>
                <Pods data="69.7%" text="% of Registered Voters who cast their vote"/>
            </div>

            <div className="pt-1 md:pt-4 flex justify-between items-center mb-2">
                <p className="text-sm md:text-md font-bold">Voters by Party</p>
                <i className="text-2xl ri-arrow-down-s-fill"></i>
            </div>

            <ChartOptions/>

            <div>
                {
                    chartType === "bar" ? <BarGraph/> :  <Pie/>
                }
            </div>
            
        </DataCardsContainer>
    )
}

export default Election;