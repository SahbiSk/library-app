import React from "react";
import "./SecondSection.css";
import { useSelector } from "react-redux";
import BookItem from "./BookItem/BookItem";

const SecondSection = () => {
  const data = useSelector((state) => state.bookReducer).slice(0, 4);
  return (
    <div className="second-section__container">
      <h2>Latest updates :</h2>
      <div className="second-section">
        {data.map((item, key) => (
          <BookItem key={key} {...item} />
        ))}
      </div>
    </div>
  );
};

export default SecondSection;
