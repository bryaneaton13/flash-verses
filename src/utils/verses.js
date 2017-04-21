/* eslint-disable */

import { toProperCase, removeCharacters } from './helper';

const VERSES = [
  {
    book: 'psalm',
    position: '25:1',
    text: `In you, Lord my God,
  I put my trust.`,
    translation: 'niv',
  },
  {
    book: 'psalm',
    position: '27:1',
    text: `The Lord is my light and my salvation—
  whom shall I fear?
The Lord is the stronghold of my life—
  of whom shall I be afraid?`,
    translation: 'niv',
  },
  {
    book: 'romans',
    position: '6:23',
    text: `For the wages of sin is death, but the gift of God is eternal life in Christ Jesus our Lord.`,
    translation: 'niv',
  },
  {
    book: 'romans',
    position: '6:25',
    text: `TODO: Look up Romans 6:25`,
    translation: 'niv',
  },
  {
    book: 'romans',
    position: '6:27',
    text: `TODO: Look up Romans 6:27`,
    translation: 'esv',
  },
  {
    book: 'romans',
    position: '62:7',
    text: `TODO: Look up Romans 6:27`,
    translation: 'nkjv',
  },
];

const FORMATTED_VERSES = VERSES.map((v, index) => ({
  ...v,
  id: removeCharacters(v.book + '_' + index),
  displayLocation: `${toProperCase(v.book)} ${v.position}`,
}));

export const VERSE_COUNT = FORMATTED_VERSES.length;

export default FORMATTED_VERSES;
