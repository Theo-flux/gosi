
import React, { useContext } from "react";
import {App} from "../context/applicationContext";
import {Election, Demography, Education, Household, Service, Children, Economics} from "./dataCards";

function GraphicalData({className, activeSidebar}){
    const {presentSidebarData} = useContext(App);

    return(
        <div className={`${className} border-t border-t-[#EAEAEA]  px-4 pt-4 w-[320px] lg:w-[620px] font-gilmer`}>
            
            <div className="py-4 flex justify-between items-center border-b border-dashed border-neutral-400">
                <span className="text-sm">{activeSidebar}</span>

                <div className="flex justify-between items-center w-[130px] md:w-[205px] ">
                    <span className="group cursor-pointer flex justify-between items-center rounded-md py-2 px-4 bg-neutral-100 text-primary-600 hover:bg-primary-600 hover:text-white"><i className="ri-share-fill md:mr-2"></i><p className="hidden lg:block font-medium">Share</p></span>
                    <span className="group cursor-pointer flex justify-between items-center rounded-md py-2 px-4 bg-neutral-100 text-primary-600 hover:bg-primary-600 hover:text-white"><i className="ri-download-fill md:mr-2"></i><p className="hidden lg:block font-medium">Print</p></span>
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

