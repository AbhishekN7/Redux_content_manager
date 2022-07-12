import { ADD_USER, ADD_USER_FAIL, GET_USER, GET_USER_FAIL } from "../constants/userConstants";

export const userReducer = (
    state = { allUsers: [] }, { type, payload }) => {
    switch (type) {
        case ADD_USER:
            return {
                allUsers: [...state.allUsers, payload]
            }
        case ADD_USER_FAIL:
            return {
                allUsers: [...state.allUsers], error: payload
            }
        case GET_USER:
            return {
                allUsers: [payload]
            }
        case GET_USER_FAIL:
            return {
                allUsers: [],
                error: payload
            }
        default: return state
    }
}