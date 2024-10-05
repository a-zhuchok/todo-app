import { configureStore } from '@reduxjs/toolkit';
import todosSlice from './redux/todosSlice';
import todoTextSlice from './redux/todoTextSlice';

const store = configureStore({
  reducer: {
    todoText: todoTextSlice,
    todos: todosSlice,
  }})

export default store;