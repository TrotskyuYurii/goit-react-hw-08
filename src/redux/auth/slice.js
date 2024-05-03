import { createSlice, createSelector } from "@reduxjs/toolkit";
// import { register, logIn, logOut, refreshUser } from "./operations";
import { register, logIn, refreshUser, logOut } from "./operations";

const INITIAL_STATE = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isError: false,
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
                state.isError = false;
            })
            .addCase(register.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
                state.isLoading = false;
            })
            .addCase(register.rejected, (state) => {
                state.isLoggedIn = false;
                state.isLoading = false;
                state.isError = true;
            })
            .addCase(logIn.pending, (state) => {
                state.isLoggedIn  = false;
                state.isLoading = true;
                state.isError = false;   
            })
            .addCase(logIn.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
                state.isLoading = false;
            })
            .addCase(logIn.rejected, (state) => {
                state.isLoggedIn = false;
                state.isLoading = false;
                state.isError = true;
            })
            .addCase(refreshUser.pending, (state) => {
                state.isLoggedIn  = false;
                state.isLoading = true;
                state.isrefreshing = true;  //false
                state.isError = false;   
            })
            .addCase(refreshUser.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isLoggedIn = true;
                state.isLoading = false;
                state.isrefreshing = false;  //true
            })
            .addCase(refreshUser.rejected, (state) => {
                state.isLoggedIn = false;
                state.isLoading = false;
                state.isrefreshing = false;
                // state.isError = true;
            })
            .addCase(logOut.pending, (state) => {
                state.isLoading = true;
                state.isError = false;   
            })
            .addCase(logOut.fulfilled, () => {
               return INITIAL_STATE;
            })
            .addCase(logOut.rejected, (state) => {
                state.isLoggedIn = false;
                state.isError = true;
            })
        
    }

})

export const authReducer = authSlice.reducer;