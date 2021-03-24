import Api from "../../utils/Api";
import { ADD_MESSAGE, GET_MESSAGES, DELETE_MESSAGE } from "../types";

const options = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const deleteMessage = (id) => async (dispatch) => {
  try {
    const { data } = await Api.delete(`/message/deleteMessage.php/${id}`);
    if (data) {
      dispatch({ type: DELETE_MESSAGE, payload: data });
    }
  } catch (err) {
    console.log(err.message);
  }
};

export const addMessage = (obj) => async (dispatch) => {
  try {
    const { data } = await Api.post("/message/addMessage.php", obj, options);
    dispatch({ type: ADD_MESSAGE, payload: data });
  } catch (err) {
    console.log(err.message);
  }
};

export const getAllMessage = () => async (dispatch) => {
  try {
    const { data } = await Api.get("/message/getAllMessage.php", options);
    dispatch({ type: GET_MESSAGES, payload: data });
  } catch (err) {
    console.log(err.message);
  }
};
