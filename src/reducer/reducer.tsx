import {combineReducers} from 'redux';
import Login from '../modules/Login/Reducer';
import ChatList from '../modules/ChatList/Reducer';
import ChatMain from '../modules/ChatMain/Reducer';

const reducer = combineReducers({
  Login,
  ChatList,
  ChatMain,
});

export default reducer;
