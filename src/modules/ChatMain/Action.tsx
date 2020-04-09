import {
  SHOW_FOOTER,
  MULTI_PICS,
  HIDE_FOOTER,
  CURRENT_IMAGE,
  URL_IMAGE,
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
