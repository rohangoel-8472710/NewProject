import {
  SHOW_FOOTER,
  MULTI_PICS,
  HIDE_FOOTER,
  CURRENT_IMAGE,
  URL_IMAGE,
  URL_VIDEO,
  CURRENT_VIDEO,
  ADD_VIDEO,
} from './Type';
import Firebaseservices from '../../utils/FirebaseServices';

export const showingFooter = () => {
  return (dispatch: any) => {
    dispatch({type: SHOW_FOOTER, payload: {data: true}});
  };
};
export const hideFooter = () => {
  return (dispatch: any) => {
    dispatch({type: HIDE_FOOTER, payload: {data: false}});
  };
};
export const addImagesToBuffer = (values: Object) => {
  return (dispatch: any, getState: any) => {
    const {images} = getState().ChatMain;
    images.push(values);
    dispatch({type: MULTI_PICS, payload: {data: images}});
  };
};

export const uploadAndSend = (
  roomID: string,
  userID: string,
  ref: any,
  callback: Function,
) => {
  return (dispatch: any, getState: any) => {
    const {images} = getState.ChatMain;
    images.map((obj: any) => {
      if (obj.roomID === roomID && obj.userID === userID) {
        dispatch({type: CURRENT_IMAGE, payload: {data: obj.img}});
        Firebaseservices.uploadMsgPic(obj.img, (url: string, name: string) => {
          dispatch({type: URL_IMAGE, payload: {data: url}});
          ref.onSend({text: ''}, true);
          callback();
        });
      }
    });
  };
};
export const addVideo = (values: Object) => {
  return (dispatch: any) => {
    dispatch({type: ADD_VIDEO, payload: {data: values}});
  };
};
export const uploadAndSendVideo = (
  roomID: string,
  userID: string,
  ref: any,
  callback: Function,
) => {
  return (dispatch: any, getState: any) => {
    const {videoURL} = getState().Main;
    if (videoURL.roomID === roomID && videoURL.userID === userID) {
      dispatch({type: CURRENT_VIDEO, payload: {data: videoURL.video}});
      Firebaseservices.uploadMsgVideo(
        videoURL.video,
        (url: string, name: string) => {
          dispatch({type: URL_VIDEO, payload: {data: url}});
          ref.onSend({text: ''}, true);
          callback();
        },
      );
    }
  };
};
