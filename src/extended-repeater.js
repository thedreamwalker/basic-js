const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let fullAddition = '';

  const additionRTime = options.addition ? 1 : 0;
  
  const setAddition = (addition, additionSeparator = '|', additionRepeatTimes = additionRTime) => {
    for (let i = 0; i < additionRepeatTimes; i++) {
      if (i === additionRepeatTimes - 1) {
        fullAddition += addition;
      } else {
        fullAddition += addition + additionSeparator;
      }
    }
  }
  setAddition(options.addition, options.additionSeparator, options.additionRepeatTimes);
  
  let fullStr = '';
  
    const setStr = (str, separator = '+', repeatTimes = 1, addition) => {
    for (let i = 0; i < repeatTimes; i++) {
      if (i === repeatTimes - 1) {
        fullStr += str + addition;
      } else {
        fullStr += str + addition + separator;
      }
    }
  }
  setStr(str, options.separator, options.repeatTimes, fullAddition);
  
  return fullStr;
}

module.exports = {
  repeater
};
