import { ADD_TODO, ADD_TODO_FAIL, GET_TODO, GET_TODO_FAIL } from "../constants/todoConstants"
import axios from "axios";
export const addTodoAction = tododata =>
    async (dispatch, getState) => {
        try {
            const { data } = await axios.post("/todos", tododata);
            dispatch({ type: ADD_TODO, payload: data })
            // const todoData = getState().todos.allTodos;
            // localStorage.setItem("todos", JSON.stringify(todoData));

        } catch (error) {
            dispatch({ type: ADD_TODO_FAIL, payload: error })
        }
    }

export const getAllTodosAction = () => async dispatch => {
    try {
        const { data } = await axios.get("/todos")
        dispatch({ type: GET_TODO, payload: data })
    } catch (error) {
        dispatch({ type: GET_TODO_FAIL, payload: error })
    }
}