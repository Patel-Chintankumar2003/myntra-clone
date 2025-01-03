import { createSlice } from "@reduxjs/toolkit";

const bagSlice = createSlice({
    name: "bag",
    initialState: [],
    reducers: {
      addToBag: (state, action) => {
        console.log("reducer",state,action);
          state.push(action.payload);
      },
      removeFromoBag: (state, action) => {
        console.log("reducer",state,action);
         return state.filter(itemId => itemId !== action.payload);
      },
    },
  });

  export const bagActions = bagSlice.actions;

  export default bagSlice;