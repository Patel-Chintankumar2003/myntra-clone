import { createSlice, current } from "@reduxjs/toolkit";


const fetchStatusSlice = createSlice({
    name: "fetchStatus",
    initialState: {
        fetchDone: false,
        currentlyFetching: false,
    },
    reducers: {
      markFatchDone: (state) => {
        state.fetchDone = true;
      },
      markFatchStarted: (state) => {
        state.currentlyFetching = true;
      },
      markFatchFinished: (state) => {
     state.currentlyFetching = false;
      },
    },
  });

  export const fetchStatusActions = fetchStatusSlice.actions;

  export default fetchStatusSlice;