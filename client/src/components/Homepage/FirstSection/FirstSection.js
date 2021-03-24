import { Button } from "@material-ui/core";
import React from "react";
import "./FirstSection.css";

const FirstSection = (props) => {
  return (
    <div className="first-section">
      <h4 className="first-section__title">Solo lib library</h4>
      <p className="first-section__description">
        Online booking service for book lovers
      </p>
      <Button
        onClick={() => {
          props.history.push("/auth");
        }}
        className="first-section__button"
      >
        JOIN US
      </Button>
    </div>
  );
};

export default FirstSection;
