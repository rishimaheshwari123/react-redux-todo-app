export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";

const addTodo = (text) => ({
  type: ADD_TODO,
  payload: {
    todo: text
  },
});

const deleteTodo = (index) => ({
  type: DELETE_TODO,
  payload: {
    index: index
  }
});




export { addTodo, deleteTodo }