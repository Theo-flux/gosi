import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { locationLevels } from "../utils/constants";
import LeafletContainer from "../container/LeafletContainer";
import { increment, decrement } from "../redux/slices/locationSlice";

function Application() {
  const [locationLevel, setLocationLevel] = useState(locationLevels.one); // available levels are country, state, lga
  const { slug, slug2 } = useParams();
  // handle case nigeria, state and lga
  const count = useSelector((state) => state.location.value);
  const dispatch = useDispatch();

  useEffect(() => {
    let isSubscribed = true;
    if (slug) {
      if (slug === "nigeria") setLocationLevel(locationLevels.one);
      else setLocationLevel(locationLevels.two);
      if (slug2) setLocationLevel(locationLevels.three);
      return () => {
        isSubscribed = false;
      };
    }
  }, [slug, slug2]);

  return (
    <div className="App">
      {/* <button
        className="m-3 bg-neutral-200 p-2"
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <span className="tex-xl">{count}</span>
      <button
        className="m-3 bg-neutral-200 p-2"
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button> */}
      <LeafletContainer locationLevel={locationLevel} />
    </div>
  );
}

export default Application;
