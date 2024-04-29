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
            // settoken(response.data.token);
            console.log('response', response.data);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);