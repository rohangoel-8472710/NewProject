import {connect} from 'react-redux';
import ChatList from './ChatList';

import {updateUser} from '../../../modules/ChatList/Action';

const mapDispatchToProps = (dispatch: Function) => ({
  updateUser: (user: any) => dispatch(updateUser(user)),
});

const mapStateToProps = (state: any) => {
  const {uid, email} = state.SignIn;
  const {user} = state.ChatList;
  return {
    uid,
    email,
    user,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ChatList);
