import { createSlice } from "@reduxjs/toolkit";

const shoppingCartsSlice = createSlice({
  name: "carts",
  initialState: {
    value: [],
  },
  reducers: {
    addCart: (state, action) => {
      state.value.push(action.payload);
    },
    removeCart: (state, action) => {
      state.value = state.value.filter((cart) => cart.id !== action.payload);
    },
  },
});

export const { addCart, removeCart } = shoppingCartsSlice.actions;

export default shoppingCartsSlice.reducer;
