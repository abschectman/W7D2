import {merge} from 'lodash';
import {RECEIVE_TODOS, RECEIVE_TODO} from "../actions/todo_actions";

const initialState = {
  1: {
    id: 1,
    title: "wash car",
    body: "with soap",
    done: false
  },
  2: {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true
  }
};

function todosReducer(state = initialState, action){
  Object.freeze(state);
  switch (action.type){
    case RECEIVE_TODOS: { 
      debugger
      const newState = {};
      action.todos.forEach(element => {
        newState[element.id] = element;
      })
      return newState;
    }
    case RECEIVE_TODO: { 
      debugger
      // const newState = state.slice(); 
      const id = action.todo.id; 
      // const {id} = action.todo;  
      const newToDo = {[id]: action.todo}
      return merge({}, state, newToDo);
      // newState[action.todo.id] = action.todo 
      // return newState; 
    }
    default: {
      return state;
    }
  }
}

export default todosReducer;