//Intializing the State
const initialState = {
  counter: 0,
};

const CounterReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'INCREASE_COUNTER': {
      return {
        ...state,
        counter: state.counter + 1,
      };
    }

    case 'DECREASE_COUNTER': {
      return {
        ...state,
        counter: state.counter - 1,
      };
    }

    default: {
      return state;
    }
  }
};

export default CounterReducer;
