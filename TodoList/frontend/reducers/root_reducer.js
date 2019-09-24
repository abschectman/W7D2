import combineReducers from "redux";
import todosReducer from "./todos_reducer";

export default function (state = {}, action){
  debugger
  return {
    todos: todosReducer(state.todos, action)
  }
}