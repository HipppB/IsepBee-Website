import React from "react";

const statistique = () => {
  return (
    <div
      style={{
        backgroundColor: "green",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <p className="statsTitle" style={{ backgroundColor: "red" }}>
        Detailed Statistics
      </p>
      <p className="statsetText" style={{ backgroundColor: "yellow" }}>
        That’s our wallet. Nothing more, nothing less. <br /> It is an
        estimation because we may invest in DEFI, <br /> in this case it is just
        an estimation.
      </p>
    </div>
  );
};

export default statistique;
