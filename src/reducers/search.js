import shuffle from 'lodash/shuffle';
import { ADD_VERSE } from '../constants';
import VERSES, { VERSE_COUNT } from '../utils/verses';

function randomNumber() {
  return Math.min(VERSE_COUNT / 2, Math.floor(Math.random() * VERSE_COUNT));
}

function getPopular() {
  let verses = shuffle(VERSES);
  verses.slice(randomNumber());
  return verses;
}

const initialState = {
  popular: getPopular(),
};

function searchReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_VERSE:
      return {
        ...state,
        popular: state.popular.filter((v) => v.id !== action.id),
      };

    default:
      return state;
  }
}

export default searchReducer;
