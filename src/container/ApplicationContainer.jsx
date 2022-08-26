import { useEffect, useContext } from "react";
import LeafletContainer from "./LeafletContainer";
import ExploreNav from "../components/exploreNav/ExploreNav";
import { GraphicalData, MenuFold, DetailsCard } from "../components";
import { App } from "../context/applicationContext";

function ApplicationContainer({
  locationLevel,
  countryResult,
  stateResult,
  lgaResult,
}) {
  const {
    showChart,
    handleShowchart,
    graphData,
    handleGraphData,
    activeSidebar,
    openChild,
    handleChild,
  } = useContext(App);

  const current = {
      location: "",
      population: graphData.data?.[0].total_population.toLocaleString(),
      language: graphData.data?.[0].most_spoken_language
  }
  
  if(locationLevel.name === "country"){
      current.location = "Nigeria";
  }else if(locationLevel.name === "state"){
      current.location = graphData.originalArgs?.state
  }else{
      current.location = `${graphData.originalArgs?.state}, ${graphData.originalArgs?.lga}` 
  }

  useEffect(() => {
    if (countryResult && locationLevel.name === "country") {
      const fallBackData = countryResult;
      handleGraphData(fallBackData);
    }

    // state
    if (stateResult && locationLevel.name === "state") {
      handleGraphData(stateResult);
    }

    // lga
    if (lgaResult && locationLevel.name === "lga") {
      handleGraphData(lgaResult);
    }
  }, [countryResult, stateResult, lgaResult, locationLevel]);

  return (
    <div className="relative h-[100vh] w-[100vw]">
      <ExploreNav
        locationLevel={locationLevel}
        handleShowchart={handleShowchart}
        className="absolute w-full z-[403] bg-white"
      />

      {showChart && (
        <MenuFold
          onClick={() => {
            handleShowchart();
            handleChild(null);
          }}
          showChart={showChart}
          className={`sm:hidden md:flex md:justify-center md:items-center md:absolute md:z-[405] md:bg-white drop-shadow-md md:w-[40px] cursor-pointer md:h-[40px] ${
            showChart
              ? "md:left-[845px] md:top-[45px]"
              : "md:left-[240px] md:top-[45px]"
          } md:transition-all md:duration-300 md:ease-in-out`}
        />
      )}

      {showChart && (
        <GraphicalData
          handleShowchart={handleShowchart}
          activeSidebar={activeSidebar}
          className={`absolute h-[calc(100%-67px)] z-[404] bg-white top-[67px] md:z-[404] 
                ${
                  showChart ? "left-0 md:left-[250px]" : "md:left-[-300px]"
                } transition-all duration-700 ease-in-out`}
        />
      )}

      {showChart && (
        <div
          onClick={() => {
            handleShowchart();
          }}
          className={`${
            showChart ? "left-0" : "left-[-400px]"
          } transition-all duration-200 absolute top-0 w-full h-[100vh] z-[403] md:hidden`}
        ></div>
      )}
      {/* <DetailsCard
        current={current}
        className="absolute z-[401] left-[20px] top-[90px] w-[200px] md:w-[300px] md:top-[90px] md:left-[270px] bg-white"
      /> */}

      <LeafletContainer locationLevel={locationLevel} />
    </div>
  );
}

export default ApplicationContainer;
