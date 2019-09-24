
 const allTodos = function(state) { 
  const keys = Object.keys(state.todos)
  const array = keys.map(id => {
    return state.todos[id] 
  });
  return array; 
}
export default allTodos; 