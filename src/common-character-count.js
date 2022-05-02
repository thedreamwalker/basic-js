const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let card = {};
  let counter = 0;
  
  Array.from(s1).forEach(element => {
    if (Object.keys(card).includes(element)) {
      card[element] += 1;
    } else {
      card[element] = 1;
    }});
  
   Array.from(s2).forEach(element => {
    if (Object.keys(card).includes(element)) {
      if (card[element] > 0) {
        card[element] -= 1;
        counter += 1;
      }
    }});
  
  return counter;
}

module.exports = {
  getCommonCharacterCount
};