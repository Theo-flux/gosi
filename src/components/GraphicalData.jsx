
import React, { useState, useRef, useContext } from "react";
import { useLocation } from 'react-router-dom';
import ReactToPrint from 'react-to-print';
import { RWebShare } from "react-web-share";
import {App} from "../context/applicationContext";
import {Election, Demography, Education, Household, Service, Children, Economics} from "./dataCards";

function GraphicalData({className, activeSidebar, handleShowchart}){
    const {presentSidebarData} = useContext(App);
    const [currentUrl, setUrl] = useState(useLocation().pathname);
    const componentRef = useRef(null);

    function usePathname(){
        const location = useLocation();
        setUrl(location.pathname);
    }

    console.log(currentUrl);

    return(
        <div className={`${className} border-t border-t-[#EAEAEA] w-full lg:w-[620px] font-gilmer`}>
            <div className="md:hidden flex justify-end px-4">
                <span onClick={() => handleShowchart()} className="flex font-medium text-neutral-400 py-1 justify-center items-center">
                    <p className="">go back</p>
                    <i className="ml-2 ri-arrow-go-back-fill"></i>
                </span>

            </div>
            
            <div ref={componentRef} className="overflow-y-scroll h-[100%] pt-1 px-4">
                <div className="py-4 flex justify-between items-center border-b border-dashed border-neutral-400">
                    <span className="text-sm w-[180px] md:w-full">{activeSidebar}</span>

                    <div className="flex justify-between items-center w-[105px] md:w-[320px]">
                        <RWebShare
                            data={{
                                text: `zobomap - ${activeSidebar}`,
                                url: `${currentUrl}`,
                                title: `zobomap - ${activeSidebar}`,
                            }}
                            onClick={() => console.log("shared successfully!")}
                        >
                            <button onClick={() => usePathname()} className="group cursor-pointer flex justify-between items-center rounded-md py-2 px-4 bg-neutral-100 text-primary-600 hover:bg-primary-600 hover:text-white"><i className="ri-share-fill"></i><p className="hidden lg:block font-medium ml-2">Share</p></button>
                        </RWebShare>

                        <ReactToPrint 
                            trigger={() => 
                                <span className="group cursor-pointer flex justify-between items-center rounded-md py-2 px-4 bg-neutral-100 text-primary-600 hover:bg-primary-600 hover:text-white"><i className="ri-download-fill"></i><p className="hidden lg:block font-medium ml-2">Print</p></span>
                            } 

                            content={() => 
                                componentRef.current
                            }
                        />
                        

                    </div>
                </div>

                {
                presentSidebarData === "Demography" && <Demography/> 
                }

                {
                presentSidebarData === "Service Delivery" && <Service/> 
                }

                {
                presentSidebarData === "Household" && <Household/> 
                }

                {
                presentSidebarData === "Children" && <Children/> 
                }

                <small className="flex justify-end text-neutral-400 text-[10px] pb-4">Source: National Bureau of Statistics (NLSS 2018 - 2019)</small>
            </div>

            
        </div>
    );
}

export default GraphicalData;

