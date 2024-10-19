import { configureStore } from '@reduxjs/toolkit';
import todosSlice from './redux/todosSlice';
import todoTextSlice from './redux/todoTextSlice';
import SignFormSlice from './redux/SignFormSlice';
import loginFormSlice from './redux/loginFormSlice';

const store = configureStore({
  reducer: {
    todoText: todoTextSlice,
    todos: todosSlice,
    newUser: SignFormSlice,
    user: loginFormSlice
  }})

export default store;