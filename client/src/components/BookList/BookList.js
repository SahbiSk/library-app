import React, { useEffect } from "react";
import BookListItem from "./BookListItem/BookListItem";
import "./BookList.css";
import { getALLBooks } from "../../redux/actions/bookActions";
import { useSelector, useDispatch } from "react-redux";

const BookList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getALLBooks());
  }, [dispatch]);

  const items = useSelector((state) => state.bookReducer);
  return (
    <div className={`booklist-container`}>
      {items.map((item, key) => (
        <BookListItem key={key} {...item} />
      ))}
    </div>
  );
};

export default BookList;
