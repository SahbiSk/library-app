import React from "react";
import "./CargoItem.css";

const CargoItem = ({ user_id, book_id, numberOfCopiesInCargo, id }) => {
  return (
    <div>
      {id}
      {user_id} {book_id} {numberOfCopiesInCargo}
    </div>
  );
};

export default CargoItem;
