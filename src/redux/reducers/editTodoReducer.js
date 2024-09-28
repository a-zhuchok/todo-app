
const initialState = {
    editTodoText: '',
  };
  
  const editTodoReducer = (state = initialState, action) => {
    switch (action.type) {
          case 'EDIT_TEXT':
        return {
            ...state,
            editTodoText: action.payload
          }
        default:
          return state
    }
  };
  
  export default editTodoReducer;