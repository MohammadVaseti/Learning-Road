import { createSlice } from "@reduxjs/toolkit";

type cartItem = {}

type cartState = {
  items : cartItem[]
}

const initialState :cartState = {
  items : []
}


export const cartSlice = createSlice({
  name: "cart",
  initialState : 
});
