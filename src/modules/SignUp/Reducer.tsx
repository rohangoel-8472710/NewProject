import {AddData} from './type';
const intialState = {
  data: '',
};

const Reducer = (state = intialState, action: any) => {
  switch (action.type) {
    case AddData:
      return {...state, uid: action.payload.data};
    default:
      return state;
  }
};

export default Reducer;
