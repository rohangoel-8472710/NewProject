import {combineReducers} from 'redux';
import {faqData} from '../../constants/constdata';

export const faqReducer = (state = {faqData: faqData}, action: { type: any; payload: any; }) => {
  switch (action.type) {
    case 'faqReducer':
      return {...faqData, ...action.payload};
    default:
      return state;
  }
};
export const reducer = combineReducers({
  faqReducer: faqReducer,
});
