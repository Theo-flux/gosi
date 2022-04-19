
import React, { useContext } from "react";
import {App} from "../context/applicationContext";
import {Election, Demography, Education, Household, Service, Children, Economics} from "./dataCards";

function GraphicalData({className, activeSidebar, handleShowchart}){
    const {presentSidebarData} = useContext(App);

    return(
        <div className={`${className} border-t border-t-[#EAEAEA] w-full lg:w-[620px] font-gilmer`}>
            <div className="md:hidden flex justify-end px-4">
                <span onClick={() => handleShowchart()} className="flex font-medium text-neutral-400 py-1 justify-center items-center">
                    <p className="">go back</p>
                    <i className="ml-2 ri-arrow-go-back-fill"></i>
                </span>

            </div>
            
            <div className="overflow-y-scroll h-[100%] pt-1 px-4">
                <div className="py-4 flex justify-between items-center border-b border-dashed border-neutral-400">
                    <span className="text-sm w-[180px] md:w-full">{activeSidebar}</span>

                    <div className="flex justify-between items-center w-[105px] md:w-[320px]">
                        <span className="group cursor-pointer flex justify-between items-center rounded-md py-2 px-4 bg-neutral-100 text-primary-600 hover:bg-primary-600 hover:text-white"><i className="ri-share-fill"></i><p className="hidden lg:block font-medium ml-2">Share</p></span>
                        <span className="group cursor-pointer flex justify-between items-center rounded-md py-2 px-4 bg-neutral-100 text-primary-600 hover:bg-primary-600 hover:text-white"><i className="ri-download-fill"></i><p className="hidden lg:block font-medium ml-2">Print</p></span>
                    </div>
                </div>

                {
                presentSidebarData === "Election" && <Election/>
                }

                {
                presentSidebarData === "Demography" && <Demography/> 
                }

                {
                presentSidebarData === "Economics" && <Economics/> 
                }

                {
                presentSidebarData === "Service Delivery" && <Service/> 
                }

                {
                presentSidebarData === "Education" && <Education/> 
                }

                {
                presentSidebarData === "Household" && <Household/> 
                }

                {
                presentSidebarData === "Children" && <Children/> 
                }

                <p className="flex justify-end text-neutral-400 text-sm pb-4">source: NBS</p>
            </div>

            
        </div>
    );
}

export default GraphicalData;

