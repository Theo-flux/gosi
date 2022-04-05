import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { locationLevels } from "../utils/constants";
import LeafletContainer from "../container/LeafletContainer";
import { increment, decrement } from "../redux/slices/locationSlice";
import {
  useLazyGetNigeriaDataQuery,
  usePostLgaDataMutation,
  usePostStateDataMutation,
} from "../api/zobomapApi";
import { capitalizeFirstLetter } from "../utils/helpers";
import ApplicationContainer from "../container/ApplicationContainer";

function Application() {
  const [getCountryData, CountryResult] = useLazyGetNigeriaDataQuery(); // TODO:Theo this is the data here got Nigeria
  const [getStateData, stateResult] = usePostStateDataMutation({ state: "" }); // TODO:Theo this is the data here got Nigeria
  const [getLgaData, lgaResult] = usePostLgaDataMutation({
    state: "",
    lga: "",
  }); // TODO:Theo this is the data here got Nigeria

  console.log(CountryResult);
  // const [NigeriaData, setNigeriaData] = useState({});

  const [locationLevel, setLocationLevel] = useState(locationLevels.one); // available levels are country, state, lga
  const { slug, slug2 } = useParams();
  // handle case nigeria, state and lga
  // const count = useSelector((state) => state.location.value);
  // const dispatch = useDispatch();
  console.log(slug, slug2);

  useEffect(() => {
    let isSubscribed = true;
    if (slug) {
      if (slug === "nigeria") {
        setLocationLevel(locationLevels.one);
        getCountryData();
      } else if (slug2) {
        setLocationLevel(locationLevels.three);
        getLgaData({
          state: capitalizeFirstLetter(slug.split("-state")[0]),
          lga: slug2.split("-lga")[0].toUpperCase(),
        });
      } else {
        setLocationLevel(locationLevels.two);
        getStateData({ state: capitalizeFirstLetter(slug.split("-state")[0]) });
      }
      return () => {
        isSubscribed = false;
      };
    }
  }, [slug, slug2]);

  return (
    <ApplicationContainer 
      locationLevel={locationLevel}
      countryResult={CountryResult}
      stateResult={stateResult}
      lgaResult={lgaResult}
    />
  );
}

export default Application;
