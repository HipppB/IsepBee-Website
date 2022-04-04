import React from "react";
import { render } from "react-dom";
import { VictoryPie, colorScale, VictoryLegend } from "victory";
import "../../style/wallet.css";

const piechart = () => {
  return (
    <div className="pie" style={{ display: "flex", flexDirection: "row" }}>
      <div>
        <VictoryPie
          colorScale={["tomato", "orange", "gold", "blue"]}
          data={[
            { x: " ", y: 50 },
            { x: " ", y: 50 },
            { x: " ", y: 100 },
            { x: " ", y: 100 },
          ]}
        />
      </div>
      <div>
        <VictoryLegend
          x={100}
          y={50}
          title=""
          centerTitle
          orientatin="vertical"
          rowGutter={25}
          colorScale={["tomato", "orange", "gold", "blue"]}
          style={{ title: { fontSize: 20 } }}
          data={[
            { name: "BTC" },
            { name: "BNB" },
            { name: "Dogecoin" },
            { name: "ETH" },
          ]}
        />
      </div>
    </div>
  );
};

export default piechart;
