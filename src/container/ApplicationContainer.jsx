import LeafletContainer from "./LeafletContainer";
import ExploreNav from "../components/exploreNav/ExploreNav";
import CountryContainer from "./CountryContainer";


function ApplicationContainer({locationLevel, countryResult, stateResult, lgaResult}) {
  let countryData = {total_population: "0", size:"0"};
  console.log(stateResult)

  if(countryResult.data){
    countryData = {total_population:countryResult.currentData[0].total_population, size:"923,768 sq. km"};
  }


  return (
      <div className="relative h-[100vh] w-[100vw]">
          <ExploreNav className="absolute w-full z-[402] bg-white"/>
          <CountryContainer countryData={countryData} className="absolute z-[401] left-[20px] top-[100px] mx-auto w-4/5 min-w-[300px] max-w-[369px] md:top-[80px] md:left-[280px] bg-white" />
          <LeafletContainer locationLevel={locationLevel} />
      </div>
  );
}

export default ApplicationContainer;
