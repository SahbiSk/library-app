import Api from "../../utils/Api";
import { LOGIN, LOGOUT, SIGNUP, UPDATE } from "../types";

const options = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const logIn = (obj) => async (dispatch) => {
  try {
    const { data } = await Api.post("/user/login.php", obj, options);
    console.log(data);
    dispatch({ type: LOGIN, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const signup = (obj) => async (dispatch) => {
  try {
    const { data } = await Api.post("/user/insert.php", obj, options);
    //  console.log(data);
    dispatch({ type: SIGNUP, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const update = (obj) => async (dispatch) => {
  try {
    console.log(obj)
    const { data } = await Api.put("/user/update.php", obj, options);
     //console.log(data);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const logout = () => async (dispatch) => {
  try {
    dispatch({ type: LOGOUT });
  } catch (error) {
    console.log(error.message);
  }
};
