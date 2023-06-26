function rotate(matrix) {
  const length = matrix.length;

  for (let i = 0; i < length / 2; i++) {
    let tmp = matrix[i];
    matrix[i] = matrix[length - i - 1];
    matrix[length - i - 1] = tmp;
  }

  for (let i = 0; i < length - 1; i++) {
    for (let j = i + 1; j < length; j++) {
      let tmp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = tmp;
    }
  }
}

rotate([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);