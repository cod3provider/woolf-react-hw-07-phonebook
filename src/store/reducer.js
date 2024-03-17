import { filterReducer } from './filterSlice';
import { contactsReducer } from './contacts/contactsSlice';

export const reducer = {
  contacts: contactsReducer,
  filter: filterReducer,
};
