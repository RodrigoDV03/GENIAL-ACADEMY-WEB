// registerSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const registerUser = createAsyncThunk(
    'register/registerUser',
    async (formValues, { rejectWithValue }) => {
        try {
        const response = await axios.post('https://reqres.in/api/register', formValues); // Cambiar por la URL de la API
        return response.data;
        } catch (err) {
        return rejectWithValue(err.response.data);
        }
    }
);

const registerSlice = createSlice({
    name: 'register',
    initialState: {
        isLoading: false,
        isRegistered: false,
        error: null,
    },
    reducers: {
        clearState: (state) => {
        state.isLoading = false;
        state.isRegistered = false;
        state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(registerUser.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(registerUser.fulfilled, (state) => {
            state.isLoading = false;
            state.isRegistered = true;
        })
        .addCase(registerUser.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
    },
});

export const { clearState } = registerSlice.actions;
export default registerSlice.reducer;
