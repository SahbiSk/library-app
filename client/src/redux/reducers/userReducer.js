import { LOGIN, LOGOUT, SIGNUP, UPDATE } from "../types";

const initial_state = {
  email: "",
  password: "",
  image: "",
  role: "",
};

const userReducer = (state = initial_state, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN:
      return { ...payload };
    case SIGNUP:
      return { ...payload };
    case UPDATE:
      return { ...payload };
    case LOGOUT:
      return initial_state;

    default:
      return state;
  }
};
export default userReducer;
