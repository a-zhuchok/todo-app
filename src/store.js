import { configureStore } from '@reduxjs/toolkit';
import todosSlice from './redux/todosSlice';
import todoTextSlice from './redux/todoTextSlice';
import SignFormSlice from './redux/SignFormSlice';

const store = configureStore({
  reducer: {
    todoText: todoTextSlice,
    todos: todosSlice,
    user: SignFormSlice
  }})

export default store;