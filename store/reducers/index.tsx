import { combineReducers } from 'redux';
import { productsReducer } from './products';
import { userReducer } from './user';

export const rootReducer = combineReducers({
  productsReducer,
  userReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
