const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  const sum = (num) => {
    const array = Array.from(num.toString(), Number);
    let counter = 0;
    array.forEach(elem => counter += elem);
    
    if (counter > 9) {
      return sum(counter);
    } else {
      return counter;
    }
  }
  return sum(n);
}

module.exports = {
  getSumOfDigits
};
