import { combineReducers } from 'redux';
import { productsReducer } from './products';
import { userReducer } from './user';
import { transactionReducer } from './transactions';

export const rootReducer = combineReducers({
  productsReducer,
  userReducer,
  transactionReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
