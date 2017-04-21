/* eslint-disable */
var fs = require("fs");

let json = require('./chapters.json');

const newJson = {};
json.forEach((book) => {
  newJson[book.book] = book.chapters.reduce((prev, next) => {
    prev[next.chapter] = next.verses;
    return prev;
  }, {});
});

console.log('newJson', newJson);

// fs.writeFileSync('output.json', JSON.stringify(newJson));