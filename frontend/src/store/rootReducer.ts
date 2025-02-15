import { combineReducers } from '@reduxjs/toolkit';
import restaurantSlice from './Restaurant';

const rootReducer = combineReducers({
  restaurant: restaurantSlice,
});

export default rootReducer;
