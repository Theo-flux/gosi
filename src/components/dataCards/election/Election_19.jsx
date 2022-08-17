import React, { useState } from "react";
import ChartOptions from "../../ChartOptions";
import { GraphTitle, PodGrid, Pods, Topspacing } from "../../../shared";
import { BarGraph, Pie } from "../../charts";

function Election11({ data_19 }) {
  const [showElection19ChartOptions, setshowElection19ChartOptions] =
    useState(false);
  const [election19ChartType, setElection19ChartType] = useState("bar");
  const [isElection19Collapsed, setElection19Collapsed] = useState(false);

  function handleElection19Chartoptions() {
    setshowElection19ChartOptions(!showElection19ChartOptions);
  }

  function handleElection19ChartType(type) {
    setshowElection19ChartOptions(!showElection19ChartOptions);
    setElection19ChartType(type);
  }

  function handleElection19Collapsed() {
    setElection19Collapsed(!isElection19Collapsed);
  }

  return (
    <>
      <Topspacing>
        <GraphTitle
          handleThis={handleElection19Collapsed}
          title="2019 Election"
        />

        {isElection19Collapsed || (
          <>
            <ChartOptions
              chartOption={showElection19ChartOptions}
              chartOptionFunction={handleElection19Chartoptions}
              chartTypeFunction={handleElection19ChartType}
            />

            {election19ChartType == "bar" ? (
              <BarGraph isVertical="true" data={data_19} />
            ) : (
              <Pie data={data_19} />
            )}
          </>
        )}
      </Topspacing>
    </>
  );
}

export default Election11;
