const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let searchCats = 0;
    for (let s = 0; s < matrix.length; s++) {
    for (let j = 0;  j < matrix[s].length; j++) {
      if(matrix[s][j] === '^^') {
        searchCats++;
      } 

    }
  }
  return searchCats
}

module.exports = {
  countCats
};
