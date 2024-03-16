import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../api/api';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, thunkAPI) => {
    try {
      const response = await instance.get('/');
      console.log(response);
      return response.data;
    }
    catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  },
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const response = await instance.post('/', contact);
      return response.data;
    }
    catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  },
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      await instance.delete(`/${id}`);
      return id;
    }
    catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  },
);
