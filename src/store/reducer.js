import { filterReducer } from './filterSlice';
import { contactsReducer } from './contactsSlice';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: 'filter',
};

const persistedReducer = persistReducer(persistConfig, contactsReducer);

export const reducer = {
  contacts: persistedReducer,
  filter: filterReducer,
};
