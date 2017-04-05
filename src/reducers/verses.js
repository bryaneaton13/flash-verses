import { REHYDRATE } from 'redux-persist/constants';
// import { POPULAR } from '../utils/verses';

const testVerses = [
  {
    id: 'psalm251',
    book: 'psalm',
    position: '25:1',
    text: `In you, Lord my God,
  I put my trust.`,
    translation: 'niv',
  },
  {
    id: 'psalm271',
    book: 'psalm',
    position: '27:1',
    text: `The Lord is my light and my salvation—
  whom shall I fear?
The Lord is the stronghold of my life—
  of whom shall I be afraid?`,
    translation: 'niv',
  },
];

const initialState = {
  mine: testVerses,
};

function versesReducer(state = initialState, action) {
  switch (action.type) {
    case REHYDRATE:
      const incoming = action.payload.verses;
      if (!incoming) return state;
      return {
        ...state,
        ...incoming,
      };

    default:
      return state;
  }
}

export default versesReducer;
