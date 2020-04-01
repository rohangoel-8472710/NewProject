import {AddData} from './type';

export const result = (value: any) => {
  return (dispatch: any) => {
    dispatch({type: AddData, payload: {data: value}});
  };
};
