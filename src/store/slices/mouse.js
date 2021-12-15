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

const mouseSliceReducer = mouseSlice.reducer;

export default mouseSliceReducer;
