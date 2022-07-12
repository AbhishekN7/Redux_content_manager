import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { todoReducer } from "../reducers/todoReducer";
import { userReducer } from "../reducers/userReducer";

const rootReducer = combineReducers({
    todos: todoReducer,
    users: userReducer
})

// todos: { allTodos: ["acer"] } 
// const todosFromLocalStorage = localStorage.getItem("todos") ?
//     JSON.parse(localStorage.getItem("todos")) :
//     [];

const store = createStore(rootReducer, {
    todos: {
        allTodos: []
    },
    users: {
        allUsers: []
    }
}, composeWithDevTools(applyMiddleware(thunk)));

export default store;