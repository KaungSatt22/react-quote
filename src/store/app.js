import { configureStore } from "@reduxjs/toolkit";
import QuotesReducer from "../features/Quotes/QuotesSlice";
export const store = configureStore({
  reducer: {
    quotes: QuotesReducer,
  },
});
