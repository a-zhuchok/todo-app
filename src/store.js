import { configureStore } from '@reduxjs/toolkit';
import todosSlice from './redux/todosSlice';
import todoTextSlice from './redux/todoTextSlice';
import signFormSlice from './redux/signFormSlice';
import loginFormSlice from './redux/loginFormSlice';

const store = configureStore({
  reducer: {
    todoText: todoTextSlice,
    todos: todosSlice,
    newUser: signFormSlice,
    user: loginFormSlice
  }})

export default store;