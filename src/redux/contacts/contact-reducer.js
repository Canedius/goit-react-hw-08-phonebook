import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { filterContact } from './contact-action';
import { initializationUser } from './contact-action';
import { tokenUser } from './contact-action';

const filter = createReducer('', {
  [filterContact]: (_, { payload }) => payload,
});

const initialization = createReducer(null, {
  [initializationUser]: (_, { payload }) => payload,
});

const token = createReducer(null, {
  [tokenUser]: (_, { payload }) => payload,
});

export default combineReducers({
  filter,
  initialization,
  token,
});
