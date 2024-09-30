export const ADD_NEW_TODO = 'ADD_NEW_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const COMPLETE_TODO = 'COMPLETE_TODO'
export const EDIT_TODO = 'EDIT_TODO'
export const EDIT_TODO_TEXT = 'EDIT_TODO_TEXT'
export const SAVE_EDIT_TODO = 'SAVE_EDIT_TODO'

export const addNewTodo = todo => {
  return {
    type: ADD_NEW_TODO,
    payload: todo
  }
}
export const deleteTodo = todo => {
    return {
      type: DELETE_TODO,
      payload: todo
    }
  }
  export const completeTodo = todo => {
    return {
      type: COMPLETE_TODO,
      payload: todo
    }
  }
  export const editTodo = todo => {
    return {
      type: EDIT_TODO,
      payload: todo
    }
  }
  export const saveEditTodo = (todo, text) => {
    return {
      type: SAVE_EDIT_TODO,
      payload1: todo,
      payload2: text,
    }
  }
  export const editTodoText = (todo, text) => {
    return {
      type: 'EDIT_TODO_TEXT',
      payload1: todo,
      payload2: text,
    };
  };