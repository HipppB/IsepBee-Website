import Header1000 from "../header/header1000.js";
import Header500 from "../header/header500.js";
import "../../style/header.css";
import React, { useState, useEffect } from "react";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return width;
}

function Headermain() {
  const [width, setWidth] = useState(getWindowDimensions());

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(getWindowDimensions()));
    return () =>
      window.removeEventListener("resize", () =>
        setWidth(getWindowDimensions())
      );
  });
  return (
    <div className="App">
      {width > 500 && <Header1000 />}
      {width <= 500 && <Header500 />}
    </div>
  );
}

export default Headermain;
