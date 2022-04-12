import React, {useContext} from "react";
import { App } from "../context/applicationContext";

export default function ChartOptions() {
    const {showChartOptions, handleChartType, handleChartoptions} = useContext(App);
    return (
        <div>
            <div className="flex justify-between items-center px-4 mb-2">
                <div></div>
                <span onClick={() => handleChartoptions()} className="cursor-pointer  border rounded p-1 flex justify-between items-center text-[8px]"><i className="ri-menu-line mr-1"></i> <p>Chart Option</p> <i className="text-[12px] ml-1 ri-arrow-drop-down-line"></i></span>
            </div>

            {
                showChartOptions && 
                <div className="rounded overflow-hidden drop-shadow-xl flex z-[405] bg-white flex-col absolute right-[32px] ">
                    <span onClick={() => handleChartType("bar")} className="px-4 py-2 cursor-pointer text-xs font-bold text-neutral-400 hover:bg-primary-100 hover:text-primary-900"><p>Bar Chart</p></span>
                    <span onClick={() => handleChartType("pie")} className="px-4 py-2 cursor-pointer text-xs font-bold text-neutral-400 hover:bg-primary-100 hover:text-primary-900"><p>Pie/Donut</p></span>
                </div>
            }
        </div>        
  )
}
