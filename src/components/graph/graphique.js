import React from "react";
import {
  VictoryChart,
  VictoryLine,
  VictoryClipContainer,
  VictoryAxis,
  VictoryScatter,
  VictoryLabel,
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
            { x: 7, y: 9 },
            { x: 10, y: 10 },
          ]}
          interpolation="natural"
        />
        <VictoryScatter
          domain={[0, 10]}
          data={[{ x: 10, y: 10 }]}
          labels={() => ["This is a", "multi-line", "label"]}
          style={{ labels: { padding: 0 } }}
          labelComponent={
            <VictoryLabel
              dx={10}
              textAnchor="start"
              verticalAnchor="middle"
              style={[{ fill: "black", fontSize: 20 }]}
            />
          }
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
