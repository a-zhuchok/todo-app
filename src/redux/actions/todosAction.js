export const ADD_NEW_TODO = 'ADD_NEW_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const COMPLETED_TODO = 'COMPLETED_TODO'
export const EDIT_TODO = 'EDIT_TODO'
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
  export const completedTodo = todo => {
    return {
      type: COMPLETED_TODO,
      payload: todo
    }
  }
  export const editTodo = todo => {
    return {
      type: EDIT_TODO,
      payload: todo
    }
  }
  export const saveEditTodo = todo => {
    return {
      type: SAVE_EDIT_TODO,
      payload: todo,
    }
  }