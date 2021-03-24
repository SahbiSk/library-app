import React from "react";
import "./BookItem.css";
import { withRouter } from "react-router-dom";

const BookItem = ({ title, image, history }) => {
  return (
    <div className="bookitem" onClick={() => history.push("/booklist")}>
      <h5>{title} </h5>
      <img src={image} alt={title} />
    </div>
  );
};

export default withRouter(BookItem);
