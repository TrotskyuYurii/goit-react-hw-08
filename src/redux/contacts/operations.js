import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

const baseURL = 'https://6623b2ba3e17a3ac846fe9ca.mockapi.io/contacts';

// Отримання масиву контактів
export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',  //префікc санки
    async (_, thunkAPI) => { //1 параметр - дані що передають в санку, 2 параметр - обект кофигурації санки
      try {
        const response = await axios.get(baseURL);
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
        const response = await axios.post(baseURL, contact);
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
        await axios.delete(`${baseURL}/${contactId}`);
        thunkAPI.dispatch(fetchContacts());
        return contactId; 
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  )