import { configureStore } from "@reduxjs/toolkit";
import QuoteSlice from "../features/Quotes/QuotesSlice";

export const store = configureStore({
  reducer: {
    quotes: QuoteSlice.reducer,
  },
});
