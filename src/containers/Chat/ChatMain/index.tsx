import {connect} from 'react-redux';
import ChatMain from './ChatMain';
import {
  showingFooter,
  hideFooter,
  addImagesToBuffer,
  uploadAndSend,
  addVideo,
  uploadAndSendVideo,
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
  addVideo: (data: any) => dispatch(addVideo(data)),
  uploadAndSendVideo: (
    roomID: string,
    userID: string,
    ref: any,
    callback: Function,
  ) => dispatch(uploadAndSendVideo(roomID, userID, ref, callback)),
});
const mapStateToProps = (state: any) => {
  const {user} = state.ChatList;
  const {
    showFooter,
    images,
    currentImg,
    sendingURL,
    videoURL,
    currentVideo,
    sendingVideoURL,
  } = state.ChatMain;
  return {
    user,
    showFooter,
    images,
    currentImg,
    sendingURL,
    videoURL,
    currentVideo,
    sendingVideoURL,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatMain);
