import React, { useState, useContext } from "react";
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
    const {chartType} = useContext(App);
    const [ageType, setAgeType] = useState("Age by range")
    const [ageOptions, setAgeOptions] = useState(false)

    function handleAgeType(arg){
        setAgeOptions(!ageOptions);
        setAgeType(arg)
    }

    return (
        <>
            <div className="grid grid-cols-2 gap-2 lg:grid-cols-3 gap-4">
                <Pods data={average_age} text="average age"/>
                <Pods data={median_age} text="median age" />
            </div>

            <div>
                <div onClick={() => setAgeOptions(!ageOptions) } className="pt-1 md:pt-4 flex justify-between items-center mb-2">
                    <p className="text-sm md:text-md font-bold">{ageType}</p>
                    <i className="text-2xl ri-arrow-down-s-fill"></i>
                </div>

               { 
                    ageOptions &&
                        <div className="rounded overflow-hidden drop-shadow-xl flex z-[405] bg-white flex-col absolute left-0 w-full">
                            <span onClick={() => handleAgeType("Age by range")} className="px-4 py-2 cursor-pointer text-xs font-bold text-neutral-400 hover:bg-primary-100 hover:text-primary-900"><p>Age by range</p></span>
                            <span onClick={() => handleAgeType("Age by category")} className="px-4 py-2 cursor-pointer text-xs font-bold text-neutral-400 hover:bg-primary-100 hover:text-primary-900"><p>Age by category</p></span>
                        </div>
                }
            </div>
            
            <ChartOptions/>


        </>
    )
}

export default Age;