import { configureStore } from "@reduxjs/toolkit";
import tabsReducer from "./slices/tabs";
import containerReducer from "./slices/container";
import mouseReducer from "./slices/mouse";
import projectsReducer from "./slices/projects";
import windowReducer from "./slices/window";

export default configureStore({
  reducer: {
    tabs: tabsReducer,
    container: containerReducer,
    mouse: mouseReducer,
    projects: projectsReducer,
    window: windowReducer,
  },
});
