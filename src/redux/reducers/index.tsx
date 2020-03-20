import {combineReducers} from 'redux';

//Importing the Reducers
import AuthReducer from './AuthReducer';
import CounterReducer from './CounterReducer';

const myReducer = combineReducers({
  AuthReducer: AuthReducer,
  CounterReducer: CounterReducer,
});

export default myReducer;
