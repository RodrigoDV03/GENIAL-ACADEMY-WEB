import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

export const registerUser = createAsyncThunk(
    "register/registerUser",
    // async (formValues, { rejectWithValue }) => {
    //     try {
    //         const response = await axios.post("http://localhost:3000/auth/signup", formValues, {
    //             headers: {
    //                 "x-api-key": "genialacademyapi_4bc22ee0-922f-4cdb-a932-987ef5b7875b",
    //                 "Content-Type": "application/json",
    //             },
    //         });
    //         console.log("Respuesta de la API:", response.data);
    //         return response.data; // Devuelve directamente los datos de la API
    //     } catch (err) {
    //         console.error("Error de la API:", err.response?.data);
    //         return rejectWithValue(err.response?.data);
    //     }
    // }
);

const registerSlice = createSlice({
    name: "register",
    initialState: {
        isLoading: false,
        isRegistered: false,
        error: null,
        userData: null,
        registerMessage: "", // Nuevo estado para almacenar el mensaje de la API
        showRegisterModal: false,
    },
    reducers: {
        clearState: (state) => {
            state.isLoading = false;
            state.isRegistered = false;
            state.error = null;
            state.registerMessage = ""; // Limpia el mensaje
            state.showRegisterModal = false;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                console.log("Register fulfilled with payload:", action.payload);
                state.isLoading = false;
                state.isRegistered = true;
                state.userData = action.payload; // Almacena toda la respuesta como `userData`
                state.registerMessage = "Registro exitoso"; // Mensaje fijo o personalizado
                state.showRegisterModal = true;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { clearState } = registerSlice.actions;
export default registerSlice.reducer;