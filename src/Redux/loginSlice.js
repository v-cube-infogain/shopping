import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name: 'login',
    initialState: {
        email: "",
        password: "",
        userDetails: {}
    },
    reducers: {
        updateEmail: (state, action) => {
            state.email = action.payload
        },
        updatePassword: (state, action) => {
            state.password = action.payload
        },
        updateUserDetails: (state, action) => {
            state.userDetails = action.payload
        }
    }
});

export const { updateEmail, updatePassword, updateUserDetails } = loginSlice.actions;

export default loginSlice.reducer;