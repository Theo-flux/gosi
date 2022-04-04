import LeafletContainer from "./LeafletContainer";
import ExploreNav from "../components/exploreNav/ExploreNav";

function ApplicationContainer({locationLevel}) {
  return (
      <div className="relative h-[100vh] w-[100vw]">
          <ExploreNav className="absolute w-full z-[401] bg-white"/>
          <LeafletContainer locationLevel={locationLevel} />
      </div>
  );
}

export default ApplicationContainer;
