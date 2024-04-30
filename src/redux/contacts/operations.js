import { createAsyncThunk } from '@reduxjs/toolkit'
import {axiosInstance} from '../../redux/auth/operations'




// Отримання масиву контактів
export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',  //префікc санки
    async (_, thunkAPI) => { //1 параметр - дані що передають в санку, 2 параметр - обект кофигурації санки
      try {
        const response = await axiosInstance.get('/contacts');
        // console.log('fetchContacts', response.data);
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

  // Додавання контакту
  export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (contact, thunkAPI) => {
      try {
        const response = await axiosInstance.post("/contacts", contact);
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  )

  // Видалення контакту
  export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (contactId, thunkAPI) => {
      try {
        await axiosInstance.delete(`${baseURL}/${contactId}`);
        thunkAPI.dispatch(fetchContacts());
        return contactId; 
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  )