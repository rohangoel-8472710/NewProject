import {connect} from 'react-redux';
import ChatMain from './ChatMain';
import {
  showingFooter,
  hideFooter,
  addImagesToBuffer,
  uploadAndSend,
} from '../../../modules/ChatMain/Action';

const mapDispatchToProps = (dispatch: Function) => ({
  showingFooter: () => dispatch(showingFooter()),
  hideFooter: () => dispatch(hideFooter()),
  addImagesToBuffer: (data: any) => dispatch(addImagesToBuffer(data)),
  uploadAndSend: (
    roomID: string,
    userID: string,
    ref: any,
    callback: Function,
  ) => dispatch(uploadAndSend(roomID, userID, ref, callback)),
});
const mapStateToProps = (state: any) => {
  const {user} = state.ChatList;
  const {showFooter, images, currentImg, sendingURL} = state.ChatMain;
  return {
    user,
    showFooter,
    images,
    currentImg,
    sendingURL,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatMain);
