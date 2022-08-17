import React, { useState } from "react";
import ChartOptions from "../../ChartOptions";
import { GraphTitle, PodGrid, Pods, Topspacing } from "../../../shared";
import { BarGraph, Pie } from "../../charts";

function Election11({ data_11 }) {
  const [showAgeRangeChartOptions, setShowAgeRangeChartOptions] =
    useState(false);
  const [ageRangeChartType, setAgeRangeChartType] = useState("bar");
  const [isAgeRangeCollapsed, setAgeRangeCollapsed] = useState(false);

  function handleAgeRangeChartoptions() {
    setShowAgeRangeChartOptions(!showAgeRangeChartOptions);
  }

  function handleAgeRangeChartType(type) {
    setShowAgeRangeChartOptions(!showAgeRangeChartOptions);
    setAgeRangeChartType(type);
  }

  function handleAgeRangeCollapsed() {
    setAgeRangeCollapsed(!isAgeRangeCollapsed);
  }

  return (
    <>
      {/* <PodGrid>
        <Pods data={average_age || `0`} text="average age" />
        <Pods data={median_age || `0`} text="median age" />
      </PodGrid> */}

      <Topspacing>
        <GraphTitle
          handleThis={handleAgeRangeCollapsed}
          title="2011 Election"
        />

        {isAgeRangeCollapsed || (
          <>
            <ChartOptions
              chartOption={showAgeRangeChartOptions}
              chartOptionFunction={handleAgeRangeChartoptions}
              chartTypeFunction={handleAgeRangeChartType}
            />

            {ageRangeChartType == "bar" ? (
              <BarGraph isVertical="true" data={data_11} />
            ) : (
              <Pie data={data_11} />
            )}
          </>
        )}
      </Topspacing>
    </>
  );
}

export default Election11;
