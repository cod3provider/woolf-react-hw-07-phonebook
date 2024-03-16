import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from '../operations';
import { handleFulfilledContacts, handlePendingContacts, handleRejectedContacts } from './contactsHandlers';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
    .addCase(fetchContacts.fulfilled, (state, { payload }) => {
      state.items = payload;
    })
    .addCase(addContact.fulfilled, (state, { payload }) => {
      state.items.push(payload);
    })
    .addCase(deleteContact.fulfilled, (state, { payload }) => {
      const index = state.items.findIndex(item => item.id === payload);
      state.items.splice(index, 1);
    })
    .addMatcher(action => action.type.endsWith('fulfilled'), handleFulfilledContacts)
    .addMatcher(action => action.type.endsWith('pending'), handlePendingContacts)
    .addMatcher(action => action.type.endsWith('rejected'), handleRejectedContacts);
  },
});

export const contactsReducer = contactsSlice.reducer;
