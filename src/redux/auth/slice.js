import { createSlice, createSelector } from "@reduxjs/toolkit";
// import { register, logIn, logOut, refreshUser } from "./operations";
import { register } from "./operations";

const INITIAL_STATE = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
    name: "auth",
    initialState: INITIAL_STATE,
    extraReducers: (builder) => {
        builder
            .addCase(register.pending, (state) => {
                // state.isLoggedIn  = false;
            })
            .addCase(register.fulfilled, (state, action) => {
                // state.user = action.payload.user;
                // state.token = action.payload.token;
                // state.isLoggedIn = true;
            })
            .addCase(register.rejected, (state, action) => {
                // state.isLoggedIn = false;
            })

        
    }
})

export const authReducer = authSlice.reducer;