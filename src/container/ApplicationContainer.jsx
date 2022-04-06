import { useContext } from "react";
import LeafletContainer from "./LeafletContainer";
import ExploreNav from "../components/exploreNav/ExploreNav";
import CountryContainer from "./CountryContainer";
import ExtrasOnMobile from "./ExtrasOnMobile";



function ApplicationContainer({locationLevel, countryResult, stateResult, lgaResult}) {

  let countryData = {total_population: "0", size:"0"};
  console.log(countryResult)

  if(countryResult.data){
    countryData = {total_population:countryResult.currentData[0].total_population, size:"923,768 sq. km"};
  }


  return (
      <div className="relative h-[100vh] w-[100vw]">
          <ExploreNav className="absolute w-full z-[402] bg-white"/>
          <CountryContainer countryData={countryData} className="absolute z-[401] left-[20px] top-[100px] w-[200px] md:w-[300px] md:top-[80px] md:left-[280px] bg-white" />
          <ExtrasOnMobile className="absolute z-[405] top-[100px] right-[20px] md:hidden" />
          <LeafletContainer locationLevel={locationLevel} />
      </div>
  );
}

export default ApplicationContainer;


