import { useState, useContext } from "react";
import LeafletContainer from "./LeafletContainer";
import ExploreNav from "../components/exploreNav/ExploreNav";
import CountryContainer from "./CountryContainer";
import ExtrasOnMobile from "./ExtrasOnMobile";
import { GraphicalData, MenuFold } from "../components";
import{App} from "../context/applicationContext";


function ApplicationContainer({locationLevel, countryResult, stateResult, lgaResult}) {
  const {showChart, handleShowchart} = useContext(App);
  let countryData = {total_population: "0", size:"0"};
  console.log(countryResult);


  if(countryResult.data){
    countryData = {total_population:countryResult.currentData[0].total_population, size:"923,768 sq. km"};
  }

  return (
      <div className="relative h-[100vh] w-[100vw]">
          <ExploreNav handleShowchart={handleShowchart} className="absolute w-full z-[402] bg-white"/>
          <MenuFold onClick={() => handleShowchart()} className={`sm:hidden md:flex md:justify-center md:items-center md:absolute md:z-[405] md:bg-white drop-shadow-md md:w-[40px] md:h-[40px] ${showChart ? "md:left-[864px] md:top-[45px]" :"md:left-[245px] md:top-[45px]"} md:transition-all md:duration-75`}/>
          {
            showChart && <GraphicalData handleShowchart={handleShowchart} showChart={showChart} className={`absolute border-t border-t-[#EAEAEA] h-auto z-[403] bg-white top-[67px] 
            ${showChart ? "left-0 md:left-[260px]" :"md:left-[-300px]"} transition-all duration-300`}/>
            
          }
          {/* <CountryContainer countryData={countryData} className="absolute z-[401] left-[20px] top-[80px] w-[200px] md:w-[300px] md:top-[80px] md:left-[270px] bg-white" /> */}
          {/* <ExtrasOnMobile className="absolute z-[401] top-[100px] right-[20px] md:hidden" /> */}
          <LeafletContainer locationLevel={locationLevel} />
      </div>
  );
}


export default ApplicationContainer;


