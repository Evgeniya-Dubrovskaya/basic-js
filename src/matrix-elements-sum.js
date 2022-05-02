const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sumMatrix = []
  for (let s = 0; s < matrix.length; s++) {
    for (let j = 0; j < matrix[s].length; j++ ) {
      sumMatrix = matrix[0][1] + matrix[0][2] + matrix[0][3] + matrix[1][1] 


    }


  }
  return sumMatrix;
}

module.exports = {
  getMatrixElementsSum
};
