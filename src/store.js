import { legacy_createStore as createStore, combineReducers } from 'redux';
import todoTextReducer from './redux/reducers/todoTextReducer';
import todosReducer from './redux/reducers/todosReducer';
import editTodoReducer from './redux/reducers/editTodoReducer';

const rootReducer = combineReducers({
  todoText: todoTextReducer,
  todos: todosReducer,
  editTodoText: editTodoReducer,
});

const store = createStore(rootReducer);

export default store;