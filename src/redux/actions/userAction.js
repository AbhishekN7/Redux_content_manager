import axios from "axios"
import { ADD_USER, ADD_USER_FAIL, GET_USER, GET_USER_FAIL } from "../constants/userConstants";
export const registerUserAction = (userData) => async (dispatch, getState) => {
    try {
        console.log(userData);
        const { data } = await axios.post("/users", userData);
        dispatch({ type: ADD_USER, payload: data })
        // const users = getState().users.allUsers;
        // localStorage.setItem("users", JSON.stringify(users));
    } catch (error) {
        dispatch({ type: ADD_USER_FAIL, payload: error })
    }
}

export const getAllUsersAction = () => async dispatch => {
    try {
        const { data } = axios.get("/users");
        dispatch({ type: GET_USER, payload: data })
    } catch (error) {
        dispatch({ type: GET_USER_FAIL, payload: error })
    }
}