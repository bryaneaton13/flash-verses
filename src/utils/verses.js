/* eslint-disable */
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
];

function toProperCase(str) {
  return str.replace(/\w*\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}

function removeCharacters(str) {
  return str.replace(/[^a-zA-Z0-9 ]/g, '');
}

const FORMATTED_VERSES = VERSES.map((v, index) => ({
  ...v,
  id: removeCharacters(v.book + '_' + index),
  displayLocation: `${toProperCase(v.book)} ${v.position}`,
}));

export const VERSE_COUNT = FORMATTED_VERSES.length;

export default FORMATTED_VERSES;
