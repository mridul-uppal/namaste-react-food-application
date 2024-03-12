import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },

    removeItem: (state, action) => {
      //   state.items.filter((item) => item != action.payload);
      state.items.pop();
    },

    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});
console.log(cartSlice)
export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
