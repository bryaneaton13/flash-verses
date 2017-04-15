import { REHYDRATE } from 'redux-persist/constants';
import shuffle from 'lodash/shuffle';
import { ADD_VERSE, REMOVE_VERSE, NEW_SUGGESTION } from '../constants';
import VERSES, { VERSE_COUNT } from '../utils/verses';

function getRandomVerseIndex() {
  return Math.floor(Math.random() * VERSE_COUNT);
}

function getSuggested(mine, currentVerse = {}) {
  const myIds = mine.map((v) => v.id);
  const verses = shuffle(VERSES);
  // Get a random verse (vi) to start incrementing from to check if it already exists in
  // the user's list. Also only increment through the total length of verses (i)
  for (let i = 0, vi = getRandomVerseIndex(), l = VERSE_COUNT; i < l; i++, vi++) {
    let vId = verses[vi % l].id;
    if (vId !== currentVerse.id && myIds.indexOf(vId) === -1) {
      return {
        ...verses[vi % l],
        suggested: true,
      };
    }
  }
  if (currentVerse.id) {
    return currentVerse;
  }
  return null;
}

const initialState = {
  mine: [],
  suggested: null,
};

function versesReducer(state = initialState, action) {
  switch (action.type) {
    case REHYDRATE:
      const incoming = action.payload.verses;
      if (!incoming) return state;
      return {
        ...state,
        mine: incoming.mine || state.mine,
        suggested: getSuggested(incoming.mine || state.mine),
      };

    case ADD_VERSE:
      const verseToAdd = VERSES.find((v) => action.id === v.id);
      const addVerses = [...state.mine.filter((v) => v.id !== action.id), verseToAdd];
      return {
        ...state,
        suggested: getSuggested(addVerses),
        mine: addVerses,
      };

    case REMOVE_VERSE:
      return {
        ...state,
        mine: state.mine.filter((v) => v.id !== action.id),
      };

    case NEW_SUGGESTION:
      return {
        ...state,
        suggested: getSuggested(state.mine, state.suggested || undefined),
      };

    default:
      return state;
  }
}

export default versesReducer;
