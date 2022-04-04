import React from "react";
import { render } from "react-dom";
import { VictoryPie, colorScale, VictoryLegend } from "victory";
import "../../style/wallet.css";

const piechart = () => {
  return (
    <div className="pie">
      <VictoryPie
        colorScale={["tomato", "orange", "gold"]}
        data={[
          { x: " ", y: 50 },
          { x: " ", y: 50 },
          { x: " ", y: 100 },
        ]}
      />
      <VictoryLegend
        x={350}
        y={-50}
        title="Legend"
        centerTitle
        orientation="vertical"
        gutter={20}
        colorScale={["tomato", "orange", "gold"]}
        style={{ border: { stroke: "black" }, title: { fontSize: 20 } }}
        data={[{ name: "Tomato" }, { name: "orange" }, { name: "gold" }]}
      />
    </div>
  );
};

export default piechart;
