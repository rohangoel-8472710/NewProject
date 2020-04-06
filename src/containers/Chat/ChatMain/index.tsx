import {connect} from 'react-redux';
import ChatMain from './ChatMain';

const mapStateToProps = (state: any) => {
  const {user} = state.ChatList;
  return {
    user,
  };
};

export default connect(mapStateToProps)(ChatMain);
