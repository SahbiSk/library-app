import Api from "../../utils/Api";
import { ADD_BOOK, GET_ALL_BOOKS, DELETE_BOOK, UPDATE_BOOK } from "../types";

const options = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const addBook = (obj) => async (dispatch) => {
  try {
    const { data } = await Api.post("/book/addBook.php", obj, options);
    dispatch({ type: ADD_BOOK, payload: data });
  } catch (error) {
    console.log(obj);
  }
};

export const getALLBooks = () => async (dispatch) => {
  try {
    const { data } = await Api.get("/book/getALLBooks.php", options);
    dispatch({ type: GET_ALL_BOOKS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteBook = (id) => async (dispatch) => {
  try {
    const { data } = await Api.delete(`/book/deleteBook.php/${id}`, options);
    console.log(data);
    dispatch({ type: DELETE_BOOK, payload: data.id });
  } catch (err) {
    console.log(err.message);
  }
};

export const updateBook = (obj) => async (dispatch) => {
  try {
    const { data } = await Api.put("/book/updateBook.php", obj, options);
    dispatch({ type: UPDATE_BOOK, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
