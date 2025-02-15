import { combineReducers } from 'redux';
import restaurantReducer from './Restaurant';

const rootReducer = combineReducers({
  restaurantReducer,
});

export default rootReducer;
