import { configureStore , createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name : 'user' ,
  initialState : {username : ''} ,
  reducers : {
    login : (state , action)=>{
      state.username =
      
    } ,
    logout : ()=>{}
})
const store = configureStore({reducer :});
