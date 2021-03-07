
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let newMatrix = [];
  if (matrix !== undefined) {
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        let dlina = matrix[i].length;
        if (i % 2 == 0) {
        newMatrix.push(matrix[i][j]);
        } else {
          newMatrix.push(matrix[i][dlina - j - 1]);
          }
      }
    }
    return newMatrix;
  }
  return [];
}