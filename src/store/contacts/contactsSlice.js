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
    // .addCase(fetchContacts.pending, handlePendingContacts)
    .addCase(fetchContacts.fulfilled, (state, { payload }) => {
      // state.isLoading = false;
      // state.error = null;
      state.items = payload;
    })
    // .addCase(fetchContacts.rejected, handleRejectedContacts)
    // .addCase(addContact.pending, handlePendingContacts)
    .addCase(addContact.fulfilled, (state, { payload }) => {
      // state.isLoading = false;
      // state.error = null;
      state.items.push(payload);
    })
    // .addCase(addContact.rejected, handleRejectedContacts)
    // .addCase(deleteContact.pending, handlePendingContacts)
    .addCase(deleteContact.fulfilled, (state, { payload }) => {
      // state.isLoading = false;
      // state.error = null;
      const index = state.items.findIndex(item => item.id === payload);
      state.items.splice(index, 1);
    })
    // .addCase(deleteContact.rejected, handleRejectedContacts)
    .addMatcher(action => action.type.endsWith('fulfilled'), handleFulfilledContacts)
    .addMatcher(action => action.type.endsWith('pending'), handlePendingContacts)
    .addMatcher(action => action.type.endsWith('rejected'), handleRejectedContacts);
    ;
  },
});

export const contactsReducer = contactsSlice.reducer;
