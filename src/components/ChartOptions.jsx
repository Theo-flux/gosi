import React, {useContext} from "react";

export default function ChartOptions({
    chartOption,
    chartOptionFunction,
    chartTypeFunction
}) {
    
    return (
        <div className="relative">
            <div className="flex justify-between items-center px-4 mb-2">
                <div></div>
                <span onClick={() => chartOptionFunction()} className="cursor-pointer border rounded p-1 flex justify-between items-center text-[8px]"><i className="ri-menu-line mr-1"></i> <p>Chart Option</p> <i className="text-[12px] ml-1 ri-arrow-drop-down-line"></i></span>
            </div>

            {
                chartOption &&
                <div className="flex justify-between items-center px-4 mb-2 absolute top-[35px] right-0">
                    <div></div>
                    <div className="rounded p-1 overflow-hidden border border-neutral-400 flex z-[405] bg-white flex-col">
                        <span onClick={() => chartTypeFunction("bar")} className="p-2 cursor-pointer text-xs hover:bg-neutral-100">
                            <p>Bar Chart</p>
                        </span>
                        <span onClick={() => chartTypeFunction("pie")} className="p-2 cursor-pointer text-xs hover:bg-neutral-100">
                            <p>Pie/Donut</p>
                        </span>
                    </div>
                </div>
            }            
        </div>        
  )
}
