import { ADD_TODO, ADD_TODO_FAIL, GET_TODO, GET_TODO_FAIL } from "../constants/todoConstants"

export const todoReducer = (
    state = { allTodos: [] }, { type, payload }
) => {
    switch (type) {
        case ADD_TODO: return {
            allTodos: [...state.allTodos, payload]
        }
        case ADD_TODO_FAIL: return {
            allTodos: [...state.allTodos], error: payload
        }
        case GET_TODO: return {
            allTodos: [payload]
        }
        case GET_TODO_FAIL: return {
            allTodos: [],
            error: payload
        }
        default: return state
    }
}