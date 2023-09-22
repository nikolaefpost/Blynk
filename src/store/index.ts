import {configureStore} from "@reduxjs/toolkit";
import itemReducer from "./itemsSlice";

const store = configureStore({
    reducer: {
        items: itemReducer,
    }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;