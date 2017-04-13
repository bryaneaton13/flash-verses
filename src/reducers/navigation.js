import { GO_TO } from '../constants';

const initialState = {
  location: 'home',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GO_TO:
      return {
        ...state,
        location: action.location || 'home',
      };

    default:
      return state;
  }
}
