import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const headers={
    "Content-Type": "application/json"
}
const config={headers}

const addUser = async user => {
    const response = await axios.post(process.env.REACT_APP_SIGHUP_URL, JSON.stringify(user), config)
    return response.json()
  }

const fetchAddUser = createAsyncThunk('user/fetchAddUser', async user => {
  const  data  = await addUser(user)
  
  return data
  
})
const initialState = {
    user: {},
  }; 
const SignFromSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAddUser.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.data = action.payload
    })
  },
})
export { fetchAddUser }
export default SignFromSlice.reducer