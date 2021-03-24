import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { MdShoppingCart } from "react-icons/md";
import { Button } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import "./BookListItem.css";
import { deleteBook, updateBook } from "../../../redux/actions/bookActions";
import {
  addToCargo,
  deleteBookFromCargo,
} from "../../../redux/actions/cargoActions";
import { AiFillDelete } from "react-icons/ai";

const BookListItem = ({
  id,
  title,
  description,
  image,
  numberOfBooksLeft,
  location,
  history,
}) => {
  const user = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteBook(id));
  };

  const handleStock = (id, nb) =>
    user.role === "admin"
      ? dispatch(updateBook({ id, numberOfBooksLeft: nb }))
      : null;

  const handleCargo = () =>
    user.role === "user"
      ? dispatch(addToCargo({ book_id: id, user_id: user.email }))
      : history.push("/auth");

  const removeBookFromCargo = () => {
    dispatch(deleteBookFromCargo(id));
  };

  return (
    <div className="booklist-item">
      <img className="booklist-item__image" src={image} alt={title} />
      <div className="booklist-item__details">
        <h2>{title} </h2>
        <p> {description} </p>
      </div>
      {user.role === "admin" ? (
        <div className="buttons">
          <Button
            onClick={() => handleStock(id, numberOfBooksLeft + 1)}
            className="button-add"
          >
            Add
          </Button>
          <Button
            onClick={() => handleStock(id, numberOfBooksLeft - 1)}
            className="button-remove"
          >
            remove
          </Button>
          {user.role === "admin" ? (
            <RiDeleteBin2Fill
              className="delete-book-icon"
              onClick={() => handleDelete()}
            />
          ) : null}
        </div>
      ) : location.pathname === "/profile/booklist" ? (
        <AiFillDelete
          className="remove-book-from-cargo"
          onClick={() => removeBookFromCargo()}
        />
      ) : numberOfBooksLeft ? (
        <MdShoppingCart
          className="booklist-item_shopping"
          onClick={() => handleCargo()}
        />
      ) : (
        ""
      )}
      <div className="books-left">
        {user.role === "admin" ? (
          <p>books available : {numberOfBooksLeft} </p>
        ) : numberOfBooksLeft ? (
          ""
        ) : (
          <strong style={{ color: "red" }}>Out Of Stock</strong>
        )}
      </div>
    </div>
  );
};

export default withRouter(BookListItem);
