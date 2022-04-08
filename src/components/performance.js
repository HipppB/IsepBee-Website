import "../style/performance.css";
import Chart from "./graph/chart.js";

const performance = () => {
  return (
    <div className="performance" id="performances">
      <p className="performanceTitle">Our performances</p>
      <p className="performanceText">
        Our past performances don’t reflect our future performances. <br />
        We never know how the market can go, investing may leads to loss of
        money
      </p>
      <Chart data={initialData}></Chart>
    </div>
  );
};

export default performance;

const initialData = [
  { time: "2018-12-22", value: 32.51 },
  { time: "2018-12-23", value: 31.11 },
  { time: "2018-12-24", value: 27.02 },
  { time: "2018-12-25", value: 27.32 },
  { time: "2018-12-26", value: 25.17 },
  { time: "2018-12-27", value: 28.89 },
  { time: "2018-12-28", value: 25.46 },
  { time: "2018-12-29", value: 23.92 },
  { time: "2018-12-30", value: 22.68 },
  { time: "2018-12-31", value: 22.67 },
];
