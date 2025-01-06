import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
        state.push({
            id:action.payload,
            qty:1,
        })
    },
    updateCart: (state, action) => {
      return state.map((ele) =>
        ele.id === action.payload
          ? { ...ele, qty: ele.qty + 1 }
          : ele
      );
    },
    decrementCart: (state, action) => {
      return state
        .map((ele) =>
          ele.id === action.payload
            ? { ...ele, qty: ele.qty - 1 }
            : ele
        )
        .filter((ele) => ele.qty > 0);
    },
    removeAllCart:()=>{
      return [];
    }
  },
});

export const { addToCart, updateCart, decrementCart,removeAllCart } = cartSlice.actions;
export default cartSlice.reducer;
