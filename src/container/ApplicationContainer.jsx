import LeafletContainer from "./LeafletContainer";
import ExploreNav from "../components/exploreNav/ExploreNav";
import CountryContainer from "./CountryContainer";


function ApplicationContainer({locationLevel, countryResult, stateResult, lgaResult}) {
  let countryData = {total_population: "0", size:"0"};

  if(countryResult.data){
    countryData = {total_population:countryResult.currentData[0].total_population, size:"923,768 sq. km"};
  }


  return (
      <div className="relative h-[100vh] w-[100vw]">
          <ExploreNav className="absolute w-full z-[401] bg-white"/>
          <CountryContainer countryData={countryData} className="absolute top-[80px] left-[275px]  z-[401] bg-white" />
          <LeafletContainer locationLevel={locationLevel} />
      </div>
  );
}

export default ApplicationContainer;
