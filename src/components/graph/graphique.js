import React from "react";
import {
  VictoryChart,
  VictoryLine,
  VictoryClipContainer,
  stroke,
  strockWidth,
  strokeLinecap,
  parent,
  Border,
  VictoryAxis,
} from "victory";

const graphique = () => {
  return (
    <div className="pie2">
      <VictoryChart>
        <VictoryLine
          groupComponent={<VictoryClipContainer />}
          style={{
            data: {
              stroke: "#c43a31",
              strokeWidth: 15,
              strokeLinecap: "round",
              borderBlockColor: "blue",
            },
          }}
          data={[
            { x: 1, y: 2 },
            { x: 2, y: 3 },
            { x: 3, y: 5 },
            { x: 4, y: 4 },
            { x: 5, y: 6 },
          ]}
          interpolation="natural"
        />
        <VictoryAxis
          style={{
            axis: { stroke: "white", strokeWidth: 10 },
            ticks: { stroke: "white" },
            tickLabels: { fill: "white" },
          }}
        />
      </VictoryChart>
    </div>
  );
};

export default graphique;
