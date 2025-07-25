import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItems: (state, action) => {
      state.push(action.payload);
    },
    removeItems: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});


export const getTotalPrice = (state) => {
  const items = state.cart;
  if (!Array.isArray(items)) return 0;
  return items.reduce((acc, item) => acc + item.price * item.quantity, 0);
};


export const { addItems, removeItems } = cartSlice.actions;
export default cartSlice.reducer;
