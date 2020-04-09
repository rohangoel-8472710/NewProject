import {
  SHOW_FOOTER,
  MULTI_PICS,
  HIDE_FOOTER,
  CURRENT_IMAGE,
  URL_IMAGE,
} from './Type';
const initalState = {
  showFooter: false,
  images: [],
  currentImg: '',
  sendingURL: '',
};
const Reducer = (state = initalState, action: any) => {
  switch (action.type) {
    case SHOW_FOOTER:
      return {...state, showFooter: action.payload.data};
    case HIDE_FOOTER:
      return {...state, showFooter: action.payload.data};
    case MULTI_PICS:
      return {...state, images: action.payload.data};
    case CURRENT_IMAGE:
      return {...state, currentImg: action.payload.data};
    case URL_IMAGE:
      return {...state, sendingURL: action.payload.data};
    default:
      return state;
  }
};
export default Reducer;
