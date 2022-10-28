function isValidSudoku(board: string[][]): boolean {
  //row
  for (let i = 0; i < board.length; i++) {
    let rowMap: Map<String, String> = new Map();
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] != '.') {
        if (rowMap.get(board[i][j]) == undefined) {
          rowMap.set(board[i][j], 'exist');
        } else {
          return false;
        }
      }
    }
  }

  //column
  for (let i = 0; i < board.length; i++) {
    let columnMap: Map<String, String> = new Map();
    for (let j = 0; j < board[i].length; j++) {
      if (board[j][i] != '.') {
        if (columnMap.get(board[j][i]) == undefined) {
          columnMap.set(board[j][i], 'exist');
        } else {
          return false;
        }
      }
    }
  }

  //square
  let x: number = 3;
  let y: number = 3;
  let k: number = 0;
  while (k < 9) {
    let squareMap: Map<String, String> = new Map();
    for (let i = y - 3; i < y; i++) {
      for (let j = x - 3; j < x; j++) {
        if (board[i][j] != '.') {
          if (squareMap.get(board[i][j]) == undefined) {
            squareMap.set(board[i][j], 'exist');
          } else {
            return false;
          }
        }
      }
    }

    if (x == 9) {
      x = 3;
      y = y + 3;
    } else {
      x = x + 3;
    }
    k++;
  }

  return true;
}

console.log(
  isValidSudoku([
    ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
  ])
);
