import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const token=localStorage.getItem('user')
const headers={
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json"
}
const config={headers}
const getTodos = async () => {
    const response = await axios.get(process.env.REACT_APP_GETTOKEN_URL, config)
    return await response
  }
  const fetchGetTodos = createAsyncThunk('todos/fetchGetTodos', async () => {
    const { data } = await getTodos()
    return data
  })

  const addTodo = async todo => {
    const response = await axios.post(process.env.REACT_APP_ADDTODO_URL, ({ title: todo.title }), config)
    return  await response
  }
const fetchAddTodo = createAsyncThunk('user/fetchAddTodo', async todo => {
const  {data} = await addTodo(todo)
  return data
})
  
const initialState = {
    todos: [],
  }; 
const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGetTodos.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.data = action.payload
    })
    .addCase(fetchAddTodo.fulfilled, (state, action) => {
      state.status = 'succeeded'
      state.data.push(action.payload)
  })

  },
})
export { fetchGetTodos, fetchAddTodo }
export default todoSlice.reducer