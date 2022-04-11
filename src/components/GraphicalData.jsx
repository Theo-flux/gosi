
import React, { useState } from "react";
import {BarGraph, Pie} from "./charts"


function GraphicalData({className}){
    const [showChartOptions, setChartOptions] = useState(false);
    const [chartType, setChartType] = useState("bar");

    function handleChartoptions(){
        setChartOptions(!showChartOptions);
    }

    function handleChartType(type){
        setChartOptions(!showChartOptions);
        setChartType(type);
    }

    return(
        <div className={`${className} border-t border-t-[#EAEAEA]  px-4 pt-4 w-[320px] lg:w-[620px] font-gilmer`}>
            
            <div className="py-4 flex justify-between items-center border-b border-dashed border-neutral-400">
                <span className="text-sm">Election / 2015 General Election</span>

                <div className="flex justify-between items-center w-[130px] md:w-[205px] ">
                    <span className="group cursor-pointer flex justify-between items-center rounded-md py-2 px-4 bg-neutral-100 text-primary-600 hover:bg-primary-600 hover:text-white"><i className="ri-share-fill md:mr-2"></i><p className="hidden lg:block font-medium">Share</p></span>
                    <span className="group cursor-pointer flex justify-between items-center rounded-md py-2 px-4 bg-neutral-100 text-primary-600 hover:bg-primary-600 hover:text-white"><i className="ri-download-fill md:mr-2"></i><p className="hidden lg:block font-medium">Print</p></span>
                </div>
            </div>

            <div className="pt-2 mdpt-8 overflow-y-hidden h-[477px]">
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
                
            </div>

        </div>
    );
}

export default GraphicalData;

