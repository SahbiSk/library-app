import React from "react";
import FirstSection from "./FirstSection/FirstSection";
import SecondSection from "./SecondSection/SecondSection";
import "./Homepage.css";

const Homepage = (props) => {
  return (
    <div className="homepage">
      <FirstSection {...props} />
      <SecondSection {...props} />
    </div>
  );
};

export default Homepage;
