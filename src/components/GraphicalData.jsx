
import React, { useContext } from "react";
import {App} from "../context/applicationContext";
import {Election, Demography, Education, Household, Service, Children, Economics} from "./dataCards";

function GraphicalData({className, activeSidebar}){
    const {presentSidebarData} = useContext(App);

    return(
        <div className={`${className} border-t border-t-[#EAEAEA]  px-4 pt-4 w-full lg:w-[620px] font-gilmer`}>
            <div className="md:hidden">
                cancel
            </div>
            
            <div className="py-4 flex justify-between items-center border-b border-dashed border-neutral-400">
                <span className="text-sm w-[100px] md:w-full">{activeSidebar}</span>

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
        </div>
    );
}

export default GraphicalData;

