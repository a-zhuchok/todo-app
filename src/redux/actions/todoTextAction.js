export const addTodoText = todoText => {
  return {
    type: 'ADD_TODO',
    payload: todoText
  };
};