import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const token = localStorage.getItem('user')
const headers = {
  Authorization: `Bearer ${token}`,
  "Content-Type": "application/json"
}
const config = { headers }
const getTodos = async () => {
  const response = await axios.get(process.env.REACT_APP_URL, config)
  return await response
}
const fetchGetTodos = createAsyncThunk('todos/fetchGetTodos', async () => {
  const { data } = await getTodos()
  return data
})
const addTodo = async todo => {
  const response = await axios.post(process.env.REACT_APP_URL, ({ title: todo.title }), config)
  return response
}
const fetchAddTodo = createAsyncThunk('todos/fetchAddTodo', async todo => {
  const { data } = await addTodo(todo)
  return data
})
const deleteTodo = async todo => {
  const response = await axios.delete(process.env.REACT_APP_URL + '/' + todo.id, config)
  return response
}
const fetchDeleteTodo = createAsyncThunk('todos/fetchDeleteTodo', async todo => {
  const { data } = await deleteTodo(todo)
  return data
})
const completedTodo = async todo => {
  const response = await axios.patch(process.env.REACT_APP_URL + '/' + todo.id + '/isCompleted', todo, config)
  return response
}
const fetchCompletedTodo = createAsyncThunk('todos/fetchCompletedTodo', async todo => {
  const { data } = await completedTodo(todo)
  return data[0]
})
const updateTodo = async todo => {
  const response = await axios.patch(process.env.REACT_APP_URL + '/' + todo.id, { title: todo.title }, config)
  return response
}
const fetchUpdateTodo = createAsyncThunk('todos/fetchUpdateTodo', async todo => {
  const { data } = await updateTodo(todo)
  return data
})
const initialState = {
  todos: [],
};
const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGetTodos.fulfilled, (state, action) => {
      state.status = 'succeeded'
      state.data = action.payload
    })
      .addCase(fetchGetTodos.pending, (state, action) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(fetchAddTodo.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.data.push(action.payload)
      })
      .addCase(fetchDeleteTodo.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.data=state.data.filter((todo) => todo.id !== action.payload.id)
      })
      .addCase(fetchDeleteTodo.pending, (state, action) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(fetchUpdateTodo.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.data=state.data.map((todo) => todo.id === action.payload.id ? action.payload : todo)
      })
      .addCase(fetchUpdateTodo.pending, (state, action) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(fetchCompletedTodo.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.data=state.data.map((todo) => todo.id === action.payload.id ? action.payload : todo)
      })
      .addCase(fetchCompletedTodo.pending, (state, action) => {
        state.status = 'loading'
        state.error = null
      })
  },
})
export { fetchGetTodos, fetchAddTodo, fetchDeleteTodo, fetchCompletedTodo, fetchUpdateTodo }
export default todosSlice.reducer