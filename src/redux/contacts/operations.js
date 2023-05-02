import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContactsThunk = createAsyncThunk(
  '@@contacts/fetchContacts',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  '@@contacts/addContact',
  async ({ name, number }, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', { name, number });
      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const removeContactThunk = createAsyncThunk(
  '@@contacts/removeContact',
  async (id, thunkAPI) => {
    try {
      await axios.delete(`/contacts/${id}`);
      return id;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  },
  {
    condition: (_, thunkAPI) => {
      const store = thunkAPI.getState();
      const loading = store.contacts.loading;
      if (loading) {
        return false;
      }
    },
  }
);
