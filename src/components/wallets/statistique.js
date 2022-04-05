import React from "react";

const statistique = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        color: "black",
      }}
    >
      <p className="statsTitle">Detailed Statistics</p>
      <p className="statsetText">
        That’s our wallet. Nothing more, nothing less. <br /> It is an
        estimation because we may invest in DEFI, <br /> in this case it is just
        an estimation.
      </p>
    </div>
  );
};

export default statistique;
