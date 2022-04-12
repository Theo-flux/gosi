import React, {useContext} from "react";
import {App} from "../../context/applicationContext";
import {DataCardsContainer} from "../../shared/";
import {BarGraph, Pie} from "../charts/";

function Election(){
    const {chartType, showChartOptions, handleChartType, handleChartoptions} = useContext(App);

    return (
        <DataCardsContainer>
            <div className="hidden lg:flex justify-between items-center w-[85%]">
                <div className="bg-primary-100 text-primary-900 p-4 rounded-md">
                    <p className="text-2xl font-bold">192,190</p>
                    <small className="text-xs font-medium">Number of Registered Voters</small>    
                </div>

                <div className="bg-primary-100 text-primary-900 p-4 rounded-md">
                    <p className="text-2xl font-bold">69.7%</p>
                    <small className="text-xs font-medium">% of Registered Voters who cast their vote</small>
                </div>
            </div>

            <div className="pt-1 md:pt-4 flex justify-between items-center mb-2">
                <p className="text-sm md:text-md font-bold">Voters by Party</p>
                <i className="text-2xl ri-arrow-down-s-fill"></i>
            </div>

            <div className="flex justify-between items-center px-4 mb-2">
                <div></div>
                <span onClick={() => handleChartoptions()} className="cursor-pointer  border rounded p-1 flex justify-between items-center text-[8px]"><i className="ri-menu-line mr-1"></i> <p>Chart Option</p> <i className="text-[12px] ml-1 ri-arrow-drop-down-line"></i></span>
            </div>

            {
                showChartOptions && <div className="rounded overflow-hidden drop-shadow-xl flex z-[405] bg-white flex-col absolute right-[32px] ">
                    <span onClick={() => handleChartType("bar")} className="px-4 py-2 cursor-pointer text-xs font-bold text-neutral-400 hover:bg-primary-100 hover:text-primary-900"><p>Bar Chart</p></span>
                    <span onClick={() => handleChartType("pie")} className="px-4 py-2 cursor-pointer text-xs font-bold text-neutral-400 hover:bg-primary-100 hover:text-primary-900"><p>Pie/Donut</p></span>
                </div>
            }

            <div>
                {
                    chartType === "bar" ? <BarGraph/> :  <Pie/>
                }
            </div>
            
        </DataCardsContainer>
    )
}

export default Election;