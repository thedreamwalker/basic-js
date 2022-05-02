const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let result = {};
  
  const checkArray = (array) => {
  const string = '.' + array.join('.');
    
  if (Object.keys(result).includes(string)) {
    result[string] += 1;
    } else {
        result[string] = 1; 
      }
    
    if (array.length > 1) {
      checkArray(array.slice(0, array.length-1));
    }
  };
  
  domains.forEach(element => {
    const array = element.split('.').reverse();
    checkArray(array);
  });
  
  const ordered = {};

  Object.keys(result).sort().forEach(key => {
    ordered[key] = result[key];
  });
  
  return ordered;
}

module.exports = {
  getDNSStats
};