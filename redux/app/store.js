import { configureStore } from "@reduxjs/toolkit";
import { categoryApi } from "../features/api/categoryAPI";

export const store = configureStore({
  reducer: {
    [categoryApi.reducerPath]: categoryApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(categoryApi.middleware),
});
