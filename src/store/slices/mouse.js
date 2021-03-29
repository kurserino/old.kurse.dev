import { createSlice } from "@reduxjs/toolkit";

export const mouseSlice = createSlice({
  name: "mouse",
  initialState: {
    docX: 0,
    docY: 0,
    posX: 0,
    posY: 0,
    elX: 0,
    elY: 0,
    elW: 0,
    elH: 0,
  },
  reducers: {
    setMouse: (state, action) => {
      state.docX = action.payload.docX;
      state.docY = action.payload.docY;
      state.posX = action.payload.posX;
      state.posY = action.payload.posY;
      state.elX = action.payload.elX;
      state.elY = action.payload.elY;
      state.elW = action.payload.elW;
      state.elH = action.payload.elH;
    },
  },
});

export const { setMouse } = mouseSlice.actions;

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

export default mouseSlice.reducer;
