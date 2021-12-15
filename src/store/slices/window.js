import { createSlice } from "@reduxjs/toolkit";

export const windowSlice = createSlice({
  name: "window",
  initialState: {
    size: {
      width: typeof window !== "undefined" ? window.innerWidth : 0,
      height: typeof window !== "undefined" ? window.innerHeight : 0,
      display:
        typeof window !== "undefined"
          ? window.innerWidth <= 991
            ? "mobile"
            : "desktop"
          : "desktop",
    },
  },
  reducers: {
    setWindowSize: (state, action) => {
      state.size.width = action.payload.width;
      state.size.height = action.payload.height;
      state.size.display = action.payload.display;
    },
  },
});

export const { setWindowSize } = windowSlice.actions;

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
// in the slice file. For example: `useAppSelector((state) => state.counter.value)`
// export const selectCount = (state) => state.counter.value;

export default windowSlice.reducer;
