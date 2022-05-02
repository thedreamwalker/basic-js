const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let newMatrix = [];
  
  // делаем дубликат массива, массив нельзя просто присвоить
  // если сделать newMatrix = matrix будет не копия, а ссылка на исходный массив, 
  // он будет меняться при изменениях в newMatrix
  
  for (let i = 0; i < matrix.length; i++)
	newMatrix.push(matrix[i].slice());
  
  // функция формирует число true среди всех соседей элемента

  const checkNeighbor = (element, index1, index2) => {
    const allNeighbor = [];
   
    if (index1 !== 0 && index2 !== 0) {allNeighbor.push(element[index1 - 1][index2 - 1])};
    if (index1 !== 0) {allNeighbor.push(element[index1 - 1][index2])};
    if (index1 !== 0 && index2 !== element[index2].length - 1) {allNeighbor.push(element[index1 - 1][index2 + 1])};
    if (index2 !== 0) {allNeighbor.push(element[index1][index2 - 1])};
    if (index2 !== element[index2].length - 1) {allNeighbor.push(element[index1][index2 + 1])};
    if (index1 !== element[index1].length - 1 && index2 !== 0) {allNeighbor.push(element[index1 + 1][index2 - 1])};
    if (index1 !== element[index1].length - 1 && index2 !== element[index2].length - 1) {allNeighbor.push(element[index1 + 1][index2])};
    if (index1 !== element[index1].length - 1 && index2 !== element[index2].length - 1) {allNeighbor.push(element[index1 + 1][index2 + 1])};
    
    let counter = 0;
  
    allNeighbor.forEach(elem => {
      if (elem === true) {
        counter += 1;
      }
    });

    return counter;
  };
  
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      newMatrix[i][j] = checkNeighbor(matrix, i, j);      
    }
  }
  
  return newMatrix;
}

module.exports = {
  minesweeper
};
