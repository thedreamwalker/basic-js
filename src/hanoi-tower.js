const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  const counter = (num) => {
    if (num === 2) {
      return 1 * 2 + 1;
    }
    return counter(num - 1) * 2 + 1;
  }
  const moves = (counter(disksNumber));
  
  const time = Math.floor(3600 / turnsSpeed * moves);
  
  return {turns: moves, seconds: time}
}

module.exports = {
  calculateHanoi
};
