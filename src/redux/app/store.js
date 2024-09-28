// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import registerReducer from '../features/register/registerSlice';

export const store = configureStore({
    reducer: {
        register: registerReducer,
    },
});
