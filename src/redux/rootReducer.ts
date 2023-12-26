import { combineReducers } from '@reduxjs/toolkit';
import searchReducer from './slices/searchSlice';
import filmReducer from './slices/FilmSlice';

const rootReducer = combineReducers({
  search: searchReducer,
  film: filmReducer,
});

export default rootReducer;
