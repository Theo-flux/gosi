import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import LeafletContainer from "../container/LeafletContainer";
import {increment, decrement} from "../redux/slices/locationSlice"

function Application() {
  const count = useSelector((state) => state.location.value);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <button
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
      </button>
      <LeafletContainer />
    </div>
  );
}

export default Application;
