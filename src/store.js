import { legacy_createStore as createStore, combineReducers } from 'redux';
import todoTextReducer from './redux/reducers/todoTextReducer';
import todosReducer from './redux/reducers/todosReducer';

const rootReducer = combineReducers({
  todoText: todoTextReducer,
  todos: todosReducer,
});

const store = createStore(rootReducer);

export default store;