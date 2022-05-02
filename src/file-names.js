const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let result = [];
  
  names.forEach((element, index) => {
    if (result.includes(element)) {
      const repeatInNames = names.slice(0, index).filter(e => e === element).length;
      const count = repeatInNames > 0 ? repeatInNames : result.slice(0, index).filter(e => e === element).length;
      
      result.push(element + `(${count})`);
    } else {
      result.push(element);
    }
  });
  return result;
}

module.exports = {
  renameFiles
};