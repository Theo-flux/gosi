import React, { useState } from "react";
import ChartOptions from "../../ChartOptions";
import { GraphTitle, PodGrid, Pods, Topspacing } from "../../../shared";
import { BarGraph, Pie } from "../../charts";

function Election11({ data_15 }) {
  const toBeGraphed = {
    APA: data_15?.["APA"],
    APC: data_15?.["APC"],
    PDP: data_15?.["PDP"],
    ACPN: data_15?.["ACPN"],
    Others: data_15?.["Others"],
  };
  const [showElection15ChartOptions, setshowElection15ChartOptions] =
    useState(false);
  const [election15ChartType, setElection15ChartType] = useState("bar");
  const [isElection15Collapsed, setElection15Collapsed] = useState(false);

  function handleElection15Chartoptions() {
    setshowElection15ChartOptions(!showElection15ChartOptions);
  }

  function handleElection15ChartType(type) {
    setshowElection15ChartOptions(!showElection15ChartOptions);
    setElection15ChartType(type);
  }

  function handleElection15Collapsed() {
    setElection15Collapsed(!isElection15Collapsed);
  }

  return (
    <>
      <PodGrid>
        <Pods
          data={data_15?.["Total Votes Cast"]?.toLocaleString() || `0`}
          text="Total Votes Cast"
        />
        <Pods
          data={data_15?.["No Of Reg. Voters"]?.toLocaleString() || `0`}
          text="No Of Reg. Voters"
        />
        <Pods
          data={data_15?.["No Of Accred. Voters"]?.toLocaleString() || `0`}
          text="No Of Accred. Voters"
        />
      </PodGrid>

      <Topspacing>
        <GraphTitle
          handleThis={handleElection15Collapsed}
          title="2015 Election"
        />

        {isElection15Collapsed || (
          <>
            <ChartOptions
              chartOption={showElection15ChartOptions}
              chartOptionFunction={handleElection15Chartoptions}
              chartTypeFunction={handleElection15ChartType}
            />

            {election15ChartType == "bar" ? (
              <BarGraph isVertical="true" data={toBeGraphed} />
            ) : (
              <Pie data={toBeGraphed} />
            )}
          </>
        )}
      </Topspacing>
    </>
  );
}

export default Election11;
