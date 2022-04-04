import React from "react";
import { VictoryChart, VictoryLine } from "victory";

const graphique = () => {
  return (
    <div className="pie2">
      <VictoryChart>
        <VictoryLine
          colorScale={["red", "green", "cyan"]}
          data={[
            { x: 1, y: 2 },
            { x: 2, y: 3 },
            { x: 3, y: 5 },
            { x: 4, y: 4 },
            { x: 5, y: 6 },
          ]}
        />
      </VictoryChart>
    </div>
  );
};

export default graphique;
