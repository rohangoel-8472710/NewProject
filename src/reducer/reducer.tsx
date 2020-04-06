import {combineReducers} from 'redux';
import Login from '../modules/Login/Reducer';
import ChatList from '../modules/ChatList/Reducer';

const reducer = combineReducers({
  Login,
  ChatList,
});

export default reducer;
