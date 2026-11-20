import { configureStore , createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name : 'user' ,
  initialState : {username : ''} ,
  reducers : {
    login : (state , action)=>{
      state.username = action.payload.username
      
    } ,
    logout : (state)=>{}
})
const store = configureStore({reducer :});
