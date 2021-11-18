import { createReducer, combineReducers } from '@reduxjs/toolkit';

import { filterContacts } from './contactsActions';
import {
  fetchContacts,
  deleteContacts,
  addContacts,
} from './contactsOperations';

const contactsReducer = createReducer([], {
  //add
  [addContacts.fulfilled]: (state, { payload }) => [...state, payload],
  //delete, selected through filter contact by id
  [deleteContacts.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
  //get contacts api
  [fetchContacts.fulfilled]: (_, { payload }) => payload,
});
//filter contacts
const filterReducer = createReducer('', {
  [filterContacts]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  //add
  [addContacts.pending]: () => true,
  [addContacts.rejected]: () => false,
  [addContacts.fulfilled]: () => false,
  //delete
  [deleteContacts.pending]: () => true,
  [deleteContacts.rejected]: () => false,
  [deleteContacts.fulfilled]: () => false,
  //get contacts api
  [fetchContacts.pending]: () => true,
  [fetchContacts.rejected]: () => false,
  [fetchContacts.fulfilled]: () => false,
});

export default combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  loading,
});