import { configureStore } from '@reduxjs/toolkit';
import clockReducer from './slices/clockSlice';
import counterReducer from './slices/counterSlice';
import authReducer from './slices/authSlice';
import { Context, createWrapper, MakeStore } from "next-redux-wrapper";

export const makeStore: MakeStore = (_: Context) =>
    configureStore({
        reducer: {
            counter: counterReducer,
            clock: clockReducer,
            auth: authReducer,
        },
        devTools: true,
        // middleware: getDefaultMiddleware().prepend(logger)
    });

export const wrapper = createWrapper(makeStore, {debug: false});