import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
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
import { ApplicationProvider } from "../context/applicationContext";

function Application() {
  const [getCountryData, CountryResult] = useLazyGetNigeriaDataQuery(); // TODO:Theo this is the data here got Nigeria
  const [getStateData, stateResult] = usePostStateDataMutation({ state: "" }); // TODO:Theo this is the data here got Nigeria
  const [getLgaData, lgaResult] = usePostLgaDataMutation({
    state: "",
    lga: "",
  }); // TODO:Theo this is the data here got Nigeria

  // console.log(CountryResult);
  // const [NigeriaData, setNigeriaData] = useState({});

  const [locationLevel, setLocationLevel] = useState(locationLevels.one); // available levels are country, state, lga
  const { slug, slug2 } = useParams();
  // handle case nigeria, state and lga

  useEffect(() => {
    let isSubscribed = true;
    if (slug) {
      if (slug === "nigeria") {
        setLocationLevel(locationLevels.one);
        getCountryData();
      } else if (slug2) {
        setLocationLevel(locationLevels.three);
        getLgaData({
          state: capitalizeFirstLetter(
            slug.split("-state")[0].replace("-", " ")
          ),
          lga: capitalizeFirstLetter(slug2.split("-lga")[0]),
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
    <>
      <Helmet>
        <meta property="og:url" content={window.location.href}></meta>
        <meta
          property="og:title"
          content={`Zobomap data for ${
            slug === "nigeria"
              ? "Nigeria"
              : slug2
              ? `${capitalizeFirstLetter(
                  slug2.split("-lga")[0]
                )}, ${capitalizeFirstLetter(slug.split("-state")[0])} state`
              : `${capitalizeFirstLetter(slug.split("-state")[0])} state`
          }`}
        />
      </Helmet>
      <ApplicationProvider>
        <ApplicationContainer
          locationLevel={locationLevel}
          countryResult={CountryResult}
          stateResult={stateResult}
          lgaResult={lgaResult}
        />
      </ApplicationProvider>
    </>
  );
}

export default Application;
