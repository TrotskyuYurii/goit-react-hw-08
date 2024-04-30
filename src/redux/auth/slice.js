import { createSlice, createSelector } from "@reduxjs/toolkit";
// import { register, logIn, logOut, refreshUser } from "./operations";
import { register, logIn, refreshUser } from "./operations";

const INITIAL_STATE = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
//   isError: false,
  isLoading: false,
};

const authSlice = createSlice({
    name: "auth",
    initialState: INITIAL_STATE,
    extraReducers: (builder) => {
        builder
            .addCase(register.pending, (state) => {
                state.isLoggedIn  = false;
                state.isLoading = true;
                // state.isError = false;
            })
            .addCase(register.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
                state.isLoading = false;
            })
            .addCase(register.rejected, (state, action) => {
                state.isLoggedIn = false;
                state.isLoading = false;
                // state.isError = true;
            })
            .addCase(logIn.pending, (state) => {
                state.isLoggedIn  = false;
                state.isLoading = true;
                // state.isError = false;   
            })
            .addCase(logIn.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
                state.isLoading = false;
            })
            .addCase(logIn.rejected, (state, action) => {
                state.isLoggedIn = false;
                state.isLoading = false;
                // state.isError = true;
            })
            .addCase(refreshUser.pending, (state) => {
                state.isLoggedIn  = false;
                state.isLoading = true;
                state.isrefreshing = false;
                // state.isError = false;   
            })
            .addCase(refreshUser.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isLoggedIn = true;
                state.isLoading = false;
                state.isrefreshing = true;
            })
            .addCase(refreshUser.rejected, (state, action) => {
                state.isLoggedIn = false;
                state.isLoading = false;
                state.isrefreshing = false;
                // state.isError = true;
            })
        
    }

})

export const authReducer = authSlice.reducer;