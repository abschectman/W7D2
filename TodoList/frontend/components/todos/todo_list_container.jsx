import todoList from "./todo_list"; 
import {connect} from "react-redux";
import allTodos from "../../reducers/selectors";
import { receiveTodo } from "../../actions/todo_actions";

const mapStateToProps = state => { 
  const todos = allTodos(state);
  return {
    todos
  }
}

const mapDispatchToProps = dispatch => { 
  return {
    receiveTodo: todo => dispatch(receiveTodo(todo))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(todoList); 