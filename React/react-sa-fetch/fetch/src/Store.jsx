import { configureStore , createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name : 'user' ,
  initialState : {username : ''} ,
  reducers : {
    login : (state , action)=>{
      state.username = action.payload.username
      
    } ,
    logout : (state)=>{
      state.username = ''
    }
})


const {login , logout} = userSlice.actions
const store = configureStore({reducer :});
