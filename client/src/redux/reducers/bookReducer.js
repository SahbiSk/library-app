import { ADD_BOOK, GET_ALL_BOOKS, DELETE_BOOK, UPDATE_BOOK } from "../types";

const initial_state = [];

const bookReducer = (state = initial_state, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_BOOK:
      return [...state, payload];

    case GET_ALL_BOOKS:
      return [...payload];

    case DELETE_BOOK:
      return [...state.filter((el) => parseInt(el.id) !== payload)];

    case UPDATE_BOOK:
      return [
        ...state.map((el) =>
          el.id === payload.id
            ? { ...el, numberOfBooksLeft: payload.numberOfBooksLeft }
            : el
        ),
      ];
    default:
      return state;
  }
};

export default bookReducer;
