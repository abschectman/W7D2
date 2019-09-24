import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store"; 
import {receiveTodo, receiveTodos} from "./actions/todo_actions";
import App from "./components/app"
import Root from './components/root'
import allTodos from "./reducers/selectors"
import {thunk} from "./middleware/thunk"

const store = configureStore();
window.store = store;
window.receiveTodo = receiveTodo;
window.receiveTodos = receiveTodos; 
window.allTodos = allTodos(store.getState())
window.thunk = thunk

document.addEventListener("DOMContentLoaded", function(){

  ReactDOM.render(<Root store={store}/>, document.getElementById("content"));
});
