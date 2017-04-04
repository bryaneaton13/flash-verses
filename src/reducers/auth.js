import { REHYDRATE } from 'redux-persist/constants';

const initialState = {
  loggedIn: true,
  token: '',
  user: {},
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case REHYDRATE:
      const incoming = action.payload.auth;
      if (!incoming) return state;
      return {
        ...state,
        ...incoming,
      };

    default:
      return state;
  }
}

export default authReducer;
