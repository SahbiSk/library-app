import { ADD_TO_CARGO, DELETE_USER_CARGO, GET_USER_CARGO } from "../types";

const initial_state = [];

const cargoReducer = (state = initial_state, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_TO_CARGO:
      return [...state, payload];
    case DELETE_USER_CARGO:
      return [...state.filter((el) => el.id !== payload)];
    case GET_USER_CARGO:
      return payload;
    default:
      return state;
  }
};

export default cargoReducer;
