import { createSlice , type PayloadAction } from "@reduxjs/toolkit";

type cartItem = {
  id : string ,
  title : string ,
  price : number ,
  quantity : number
}

type cartState = {
  items : cartItem[]
}

const initialState :cartState = {
  items : []
}


export const cartSlice = createSlice({
  name: "cart",
  initialState : ,
  reducers :{
    addTocart (state , action : PayloadAction<{id : string , title : string , price : number}>){
    const itemIndex =  state.items.findIndex(
        (item)=> item.id === action.payload.id
      )
    },
    removeFromCart (){}
  }
});
