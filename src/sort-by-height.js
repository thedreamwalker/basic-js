const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  if (arr.includes(-1)) {
    const newArr = arr.filter(elem => elem !== -1).sort((a, b) => a - b);
  
    let indexNumber = [];
    
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === -1) {
        indexNumber.push(i);
      }
    }
   indexNumber.forEach(index => {
     newArr.splice(index, 0, -1);
   });
    return newArr;
  } else {
    return arr.sort((a, b) => a - b);
  }
}

module.exports = {
  sortByHeight
};
