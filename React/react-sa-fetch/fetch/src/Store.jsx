import { configureStore , createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name : 'user' ,
  initialState : {username : ''} ,
  reducers : {
    login : (state , action)=>{
      
    } ,
    logout : ()=>{}
})
const store = configureStore({reducer :});
