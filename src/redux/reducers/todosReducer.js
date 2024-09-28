import { ADD_NEW_TODO } from '../actions/todosAction'
import { DELETE_TODO } from '../actions/todosAction'
import { COMPLETED_TODO } from '../actions/todosAction'
import { EDIT_TODO } from '../actions/todosAction'
import { SAVE_EDIT_TODO } from '../actions/todosAction'

const initialState = {
  todos:  []
}

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_TODO:
      return {
        ...state,
        todos: [...state.todos, { ...action.payload }] 
      }     
      case DELETE_TODO:
      return {
        ...state,
        todos: [...state.todos.filter((todo) => todo.id !== action.payload.id)] 
      }  
      case COMPLETED_TODO:
      return {
        ...state,
        todos: [...state.todos.map((todo) => todo.id === action.payload.id?{ ...todo, isСompleted: !todo.isСompleted }:todo)] 
      } 
      case EDIT_TODO:
        return {
          ...state,
          todos: [...state.todos.map((todo) => todo.id === action.payload.id?{ ...todo, isEdit: !todo.isEdit }:todo)] 
        } 
        case SAVE_EDIT_TODO:
          return {
            ...state,
            todos: [...state.todos.map((todo) => todo.id === action.payload.id?{ ...todo, isEdit: !todo.isEdit, description:action.payload}:todo)] 
          }                                       
    default:
      return state
  }
}

export default todosReducer