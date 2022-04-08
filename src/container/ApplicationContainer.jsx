import { useContext } from "react";
import LeafletContainer from "./LeafletContainer";
import ExploreNav from "../components/exploreNav/ExploreNav";
import CountryContainer from "./CountryContainer";
import ExtrasOnMobile from "./ExtrasOnMobile";
import { GraphicalData } from "../components";

function ApplicationContainer({locationLevel, countryResult, stateResult, lgaResult}) {
  let countryData = {total_population: "0", size:"0"};
  console.log(countryResult)

  if(countryResult.data){
    countryData = {total_population:countryResult.currentData[0].total_population, size:"923,768 sq. km"};
  }

  return (
      <div className="relative h-[100vh] w-[100vw]">
          <ExploreNav className="absolute w-full z-[402] bg-white"/>
          <GraphicalData className="absolute border-t border-t-[#EAEAEA] h-auto z-[403] bg-white top-[67px] left-[50px] md:left-[260px]"/>
          {/* <CountryContainer countryData={countryData} className="absolute z-[401] left-[20px] top-[80px] w-[200px] md:w-[300px] md:top-[80px] md:left-[270px] bg-white" /> */}
          <ExtrasOnMobile className="absolute z-[401] top-[100px] right-[20px] md:hidden" />
          <LeafletContainer locationLevel={locationLevel} />
      </div>
  );
}


export default ApplicationContainer;


