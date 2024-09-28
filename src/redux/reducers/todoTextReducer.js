const initialState = {
    todoText: '',
  };
  
  const todoTextReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return {
            ...state,
            todoText: action.payload
          }
        default:
          return state
    }
  };
  
  export default todoTextReducer;