// import { useMemo } from "react";
import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import tabsReducer from "./slices/tabs";
import containerReducer from "./slices/container";
import mouseReducer from "./slices/mouse";
import projectsReducer from "./slices/projects";
import windowReducer from "./slices/window";

const store = configureStore({
  reducer: {
    tabs: tabsReducer,
    container: containerReducer,
    mouse: mouseReducer,
    projects: projectsReducer,
    window: windowReducer,
  },
});
export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

// export const initializeStore = (preloadedState) => {
//   let _store = store ?? initStore(preloadedState)

//   // After navigating to a page with an initial Redux state, merge that state
//   // with the current state in the store, and create a new store
//   if (preloadedState && store) {
//     _store = initStore({
//       ...store.getState(),
//       ...preloadedState,
//     })
//     // Reset the current store
//     store = undefined
//   }

// export function useStore(initialState) {
//   const store = useMemo(() => initializeStore(initialState), [initialState]);
//   return store;
// }
