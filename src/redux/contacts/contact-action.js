import { createAction } from '@reduxjs/toolkit';
export const filterContact = createAction('filter/contact', e => ({
  payload: e.currentTarget.value,
}));

export const initializationUser = createAction(
  'initialization/contact',
  flag => ({
    payload: flag,
  })
);
export const tokenUser = createAction('tokenUser/contact', token => ({
  payload: token,
}));
