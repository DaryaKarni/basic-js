const { NotImplementedError } = require('../lib');

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
  let totalSum = 0;
  const rows = matrix.length;
  const cols = matrix[0].length;

  for (let col = 0; col < cols; col += 1) {
    for (let row = 0; row < rows; row += 1) {
      if (matrix[row][col] === 0) {
        break;
      }
      totalSum += matrix[row][col];
    }
  }

  return totalSum;
}

module.exports = {
  getMatrixElementsSum
};
