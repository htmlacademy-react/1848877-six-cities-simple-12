import { reducer } from '../reducer';
import { userProcessSlice } from '../user-process/user-process';
import { combineReducers } from '@reduxjs/toolkit';

export const rootReducer = combineReducers({
  reducer,
  [userProcessSlice.name]: userProcessSlice.reducer,
});
