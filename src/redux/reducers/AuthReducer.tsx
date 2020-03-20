// Intializing the State
const intialState = {
  loggedIn: false,
};

// Reducers (Modifies The State And Returns A New State)
const AuthReducer = (state = intialState, action: any) => {
  switch (action.type) {
    // For Login
    case 'LOGIN': {
      return {
        ...state,
        loggedIn: action.Done,
      };
    }

    default: {
      return state;
    }
  }
};

export default AuthReducer;
