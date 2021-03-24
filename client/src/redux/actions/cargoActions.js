import Api from "../../utils/Api";
import { ADD_TO_CARGO, DELETE_USER_CARGO, GET_USER_CARGO } from "../types";

const options = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const addToCargo = (obj) => async (dispatch) => {
  try {
    const { data } = await Api.post("/cargo/addCargo.php", obj, options);
    dispatch({ type: ADD_TO_CARGO, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteBookFromCargo = (id) => async (dispatch) => {
  try {
    const { data } = await Api.delete(`/cargo/deleteCargo.php/${id}`, options);
    console.log(data.id);
    dispatch({ type: DELETE_USER_CARGO, payload: data.id });
  } catch (error) {
    console.log(error.message);
  }
};

export const getUserCargo = (obj) => async (dispatch) => {
  try {
    const { data } = await Api.get(
      `/cargo/getUserBookList.php/${obj.user_id}`,
      options
    );
    dispatch({ type: GET_USER_CARGO, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
