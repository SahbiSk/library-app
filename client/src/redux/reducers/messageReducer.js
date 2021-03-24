import { DELETE_MESSAGE, GET_MESSAGES, ADD_MESSAGE } from "../types";

const initial_state = [];

const messageReducer = (state = initial_state, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_MESSAGES:
      return [...payload];

    case ADD_MESSAGE:
      return [...state, payload];

    case DELETE_MESSAGE:
      return [...state.filter((el) => parseInt(el.id) !== payload)];

    default:
      return state;
  }
};
export default messageReducer;
