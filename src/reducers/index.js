import { combineReducers } from 'redux';
import foodReducer from './foodReducer';
import userReducer from './userReducer';
import orderHistoryReducer from './orderHistoryReducer';

const rootReducer = combineReducers({ foodReducer, userReducer, orderHistoryReducer });

export default rootReducer;
