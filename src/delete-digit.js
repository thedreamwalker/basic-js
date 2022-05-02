const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  n = Array.from(String(n), Number);
  
  let result = [];
  
  for (let i = 0; i < n.length; i++) {
    if (n[i] >= n[i+1] || !n[i+1]) {
      result.push(n[i]);
    } else {
      result.push(n.slice(i+1, n.length));
      break;
    }
  }
  
  if (result.flat().length === n.length) {
    result = result.slice(0, result.length-1);
  }
  
  return Number(result.flat().join(''));
}

module.exports = {
  deleteDigit
};
