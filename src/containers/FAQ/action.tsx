export const faqDataList = (data: any) => {
  return (dispatch: any) => {
    dispatch(dataUpdate('faqReducer', 'faqData', data));
  };
};

function dataUpdate(actionType: any, key: any, data: any) {
  return {type: actionType, payload: {[key]: data}};
}
