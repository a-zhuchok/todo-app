export const addTodoText = todoText => {
  return {
    type: 'ADD_TODO_TEXT',
    payload: todoText
  };
};