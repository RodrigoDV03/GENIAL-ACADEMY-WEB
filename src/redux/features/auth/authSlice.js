import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk para iniciar sesión
export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async (userData, { rejectWithValue }) => {
        try {
            const response = await axios.post('http://localhost:3000/auth/signin', userData, {
                headers: {
                    'x-api-key': 'genialacademyapi_4bc22ee0-922f-4cdb-a932-987ef5b7875b',
                    'Content-Type': 'application/json',
                }
            });
            console.log(response.data.data);
            return response.data.data;
        } catch (error) {
            console.log(error.response.data);
            return rejectWithValue(error.response.data.data);
        }
    }
);

// Recuperar datos de localStorage
const storedUser = JSON.parse(localStorage.getItem('user'));
const storedToken = localStorage.getItem('token');

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: storedUser || null,
        token: storedToken || null,
        isLoading: false,
        isAuthenticated: !!storedToken, // Autenticado si hay un token almacenado
        error: null,
    },
    reducers: {
        logoutUser: (state) => {
            state.user = null;
            state.token = null;
            state.isAuthenticated = false;
            state.error = null;
            localStorage.removeItem('user');
            localStorage.removeItem('token');
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.token = action.payload.accessToken;
                state.user = action.payload.user;
                state.isAuthenticated = true;
                state.error = null;

                localStorage.setItem('user', JSON.stringify(action.payload.user));
                localStorage.setItem('token', action.payload.accessToken);
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload.error;
                state.isAuthenticated = false;
            });
    },
});

export const { logoutUser } = authSlice.actions;
export default authSlice.reducer;