import { createSlice } from "@reduxjs/toolkit";

const tabs = [
  {
    id: 1,
    title: "Projects",
    href: "/",
  },
  // {
  //   id: 2,
  //   title: "Articles",
  //   href: "/articles",
  // },
  {
    id: 3,
    title: "About me",
    href: "/about-me",
  },
  // {
  //   id: 4,
  //   title: "Illustrations",
  //   href: "/illustrations",
  // },
  {
    id: 5,
    title: "Contact",
    href: "/contact",
  },
];

export const tabsSlice = createSlice({
  name: "tabs",
  initialState: {
    // initialPos: 0,
    inicialClick: 0,
    initialIndex: 0,
    lockedTranslateX: 0,
    leftOffset: 0,
    dragging: false,
    isOpen: false,
    rect: {
      bottom: 0,
      height: 0,
      left: 0,
      right: 0,
      top: 0,
      width: 0,
      x: 0,
      y: 0,
    },
    closedTabs: [],
    tabs: [...tabs],
    menu: [...tabs],
  },
  reducers: {
    setTabs: (state, action) => {
      state.tabs = action.payload;
    },
    setClosedTabs: (state, action) => {
      state.closedTabs = action.payload;
    },
    setTabsLeftOffset: (state, action) => {
      state.leftOffset = action.payload;
    },
    // setInitialPos: (state, action) => {
    //   state.initialPos = action.payload;
    // },
    setInitialClick: (state, action) => {
      state.initialClick = action.payload;
    },
    setInitialIndex: (state, action) => {
      state.initialIndex = action.payload;
    },
    setDragging: (state, action) => {
      state.dragging = action.payload;
    },
    setRect: (state, action) => {
      state.rect = action.payload;
    },
    setOpen: (state, action) => {
      state.isOpen = action.payload;
    },
  },
});

export const {
  // setInitialPos,
  setTabsLeftOffset,
  setInitialClick,
  setInitialIndex,
  setDragging,
  setLockedTranslateX,
  setRect,
  setTabs,
  setClosedTabs,
  setOpen,
} = tabsSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
// export const setLockedTranslateXAsync = (val) => (dispatch) => {
//   dispatch(setLockedTranslateX(val));
// };

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useAppSelector((state) => state.counter.value)`
// export const selectCount = (state) => state.counter.value;

const tabsSliceReducer = tabsSlice.reducer;

export default tabsSliceReducer;
