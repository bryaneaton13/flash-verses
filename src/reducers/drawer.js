import { OPEN_DRAWER, CLOSE_DRAWER } from '../constants';

const initialState = {
  open: false,
  disabled: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case OPEN_DRAWER:
      return {
        ...state,
        open: true,
      };

    case CLOSE_DRAWER:
      return {
        ...state,
        open: false,
      };

    default:
      return state;
  }
}
