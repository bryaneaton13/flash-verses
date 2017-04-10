import {
  ADD_VERSE,
  REMOVE_VERSE,
  NEW_SUGGESTION,
} from '../constants';

export function addVerseAction(verse) {
  return {
    type: ADD_VERSE,
    id: verse.id,
  };
}

export function removeVerseAction(verse) {
  return {
    type: REMOVE_VERSE,
    id: verse.id,
  };
}

export function newSuggestionAction() {
  return { type: NEW_SUGGESTION };
}
