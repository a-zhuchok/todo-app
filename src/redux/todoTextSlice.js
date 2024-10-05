import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todoText: '',
};

const todoTextSlice = createSlice({
  name: 'todoText',
  initialState,
  reducers: {
    addTodoText: (state, action) => {
      state.todoText = action.payload
    },
  },
});

export const { addTodoText } = todoTextSlice.actions;
export default todoTextSlice.reducer;