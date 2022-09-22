import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { allReducers } from "@/store/allReducers";

const api = "https://rickandmortyapi.com/api";

const appReducer = combineReducers({
  ...allReducers,
});

export const store = configureStore({
  reducer: appReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
