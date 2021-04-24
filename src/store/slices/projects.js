import { createSlice } from "@reduxjs/toolkit";

export const containerSlice = createSlice({
  name: "projects",
  initialState: {
    active: false,
  },
  reducers: {
    setContainer: (state, action) => {
      state.width = action.payload.width;
      state.height = action.payload.height;
      state.display = action.payload.display;
    },
  },
});

export const { setContainer } = containerSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
// export const incrementAsync = (amount) => (dispatch) => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount));
//   }, 1000);
// };

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
// export const selectCount = (state) => state.counter.value;

export default containerSlice.reducer;
