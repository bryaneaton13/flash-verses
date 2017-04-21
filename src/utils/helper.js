export function toProperCase(str) {
  return str.replace(/\w*\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}

export function removeCharacters(str) {
  return str.replace(/[^a-zA-Z0-9 ]/g, '');
}
