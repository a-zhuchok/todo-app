import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addNewTodo: (state, action) => {
      state.todos.push(action.payload)
    },
    completeTodo: (state, action) => {
      state.todos = state.todos.map((todo) => todo.id === action.payload.id ? { ...todo, isСompleted: !todo.isСompleted } : todo)
    },
    deleteTodo: (state, action) => {
      state.todos = [...state.todos.filter((todo) => todo.id !== action.payload.id)]
    },
    editTodo: (state, action) => {
      state.todos = [...state.todos.map((todo) => todo.id === action.payload.id ? { ...todo, isEdit: !todo.isEdit } : todo)]
    },
    editTodoText: (state, action) => {
      state.todos = [...state.todos.map((todo) => todo.id === action.payload.todo.id ? { ...todo, text: action.payload.text } : todo)]
    },
    saveEditTodo: (state, action) => {
      state.todos = [...state.todos.map((todo) => todo.id === action.payload.todo.id ? { ...todo, isEdit: !todo.isEdit, text: action.payload.text } : todo)]
    },
  },
});

export const { addNewTodo, completeTodo, deleteTodo, editTodo, saveEditTodo, editTodoText } = todosSlice.actions;
export default todosSlice.reducer;