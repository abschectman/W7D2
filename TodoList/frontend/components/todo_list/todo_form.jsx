import React from "react"; 
import {connect} from "react-redux"; 
import {receiveTodo} from "../../actions/todo_actions"

class TodoForm extends React.Component { 
  constructor(props) { 
    super(props); 
    this.state = {title: "", body: ""}

    // this.title = props.title;  
    // this.body = props.body;

    this.handleSubmit = this.handleSubmit.bind(this); 
  }
  
  handleSubmit(e) { 
    e.preventDefault();
    const {title, body} = this.state;
    const todo = {title, body, id: Math.random()*1000}
    this.props.receiveTodo(todo); 
    this.setState({ 
      title: "",
      body: ""
    })
  }

  render() { 
    return (
    <form onSubmit={this.handleSubmit}>

      <label>Add title</label>
      <input type="text" onChange={(e)=>{
        this.setState({title: e.currentTarget.value});
        }}/>
      <label>Body</label>
      <input type="text" onChange={(e) =>{
        this.setState({body: e.currentTarget.value});
      }}/>
      <input type="submit" value="make new todo"/>
    </form>
    )
  }
}

export default TodoForm;