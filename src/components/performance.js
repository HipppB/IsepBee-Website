import "../style/performance.css";
import Chart from "./graph/chart.js";

const Performance = () => {
  return (
    <div className="performance" id="performances">
      <p className="performanceTitle">Our performances</p>
      <p className="performanceText">
        Our past performances don’t reflect our future performances. <br />
        We never know how the market can go, investing may leads to loss of
        money !
      </p>
      <div className="performanceContainer">
        <Chart />
      </div>
    </div>
  );
};

export default Performance;
