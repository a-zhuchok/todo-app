import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const headers={
    "Content-Type": "application/json"
}
const config={headers}
const addUser = async newUser => {
    const response = await axios.post(process.env.REACT_APP_SIGHUP_URL, JSON.stringify(newUser), config)
    return await response.json()
  }
const fetchAddUser = createAsyncThunk('user/fetchAddUser', async newUser => {
  const  data  = await addUser(newUser)
  return data
})
const initialState = {
    newUser: {},
  }; 
const SignFromSlice = createSlice({
  name: 'newUser',
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