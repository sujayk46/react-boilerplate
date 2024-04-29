//Modules Imports
import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

//Slice Imports
import counterReducer from "./slices/counter.slice";

export const store = configureStore({
    reducer: {
        // Add the counter reducer to the store
        counter: counterReducer,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export function useAppDispatch() {
    return useDispatch<AppDispatch>();
}


