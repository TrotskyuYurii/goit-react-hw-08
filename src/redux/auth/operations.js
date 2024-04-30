import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';


//instance
const baseURL = 'https://connections-api.herokuapp.com';

const axiosInstance = axios.create({
    baseURL: baseURL,
  });

  export const settoken = token => {
   axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}` 
  }

  export const cleartoken = () => {
    axiosInstance.defaults.headers.common.Authorization = ''
  }
//instance




export const register = createAsyncThunk(
    'auth/register',
    async (credentials, thunkAPI) => {
        try {
            const response = await axiosInstance.post('/users/signup', credentials);
            settoken(response.data.token);
            // console.log('register', response.data);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const logIn = createAsyncThunk(
    'auth/login',
    async (credentials, thunkAPI) => {
        try {
            const response = await axiosInstance.post('/users/login', credentials);
            settoken(response.data.token);
            // console.log('login', response.data);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const refreshUser = createAsyncThunk(
    'auth/refresh',
    async (_, thunkAPI) => {
        try {
            const state = thunkAPI.getState();
            const persistedToken = state.auth.token;
            settoken(persistedToken);
            const response = await axiosInstance.get('/users/current');
            // console.log('login', response.data);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)