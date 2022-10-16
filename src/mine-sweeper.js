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

  const checkNeighbor = (element, index1, index2) => {
    
    let counter = 0;
    
    if (element[index1 - 1]) {
      if (element[index1 - 1][index2] === true) {counter += 1;}
      if (element[index1 - 1][index2 - 1] === true) {counter += 1;}
      if (element[index1 - 1][index2 + 1] === true) {counter += 1;}
    }
    
    if (element[index1][index2 - 1] === true) {counter += 1;}
    if (element[index1][index2 + 1] === true) {counter += 1;}
    
    if (element[index1 + 1]) {
      if (element[index1 + 1][index2 - 1] === true) {counter += 1;}
      if (element[index1 + 1][index2] === true) {counter += 1;}
      if (element[index1 + 1][index2 + 1] === true) {counter += 1;}
    }
    
    console.log(counter);
    

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
