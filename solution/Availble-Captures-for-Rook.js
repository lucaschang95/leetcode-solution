/* 
 * chessboard: 8 x 8 {character[][]}
 * R: white rook
 * B: white bishops
 * p: black pawns
*/

var numRookCaptures = function(board) {
  // Got 2D position of 'R'
  let x = -1, y = -1;
  board.forEach((row, index1) => {
    row.forEach((element, index2) => {
      if (element === 'R') {
        x = index1;
        y = index2;
      }
    });
  });
  // Got 4 line corresponding 'R'
  const testGrid = [];
  testGrid.push(board.slice(0, x).map((row) => row[y]).reverse());
  testGrid.push(board[x].slice(y + 1));
  testGrid.push(board.slice(x + 1).map((row) => row[y]));
  testGrid.push(board[x].slice(0, y).reverse());

  // Check if a 'p' can be captured in a line
  let ans = 0;
  
  testGrid.forEach((array) => {
    const BIndex = array.indexOf('B');
    const pIndex = array.indexOf('p');
    
    ans = (pIndex !== -1 && (BIndex === -1 || BIndex > pIndex)) ? ans + 1 : ans;
  });

  return ans;
};


const board = [[".",".",".",".",".",".",".","."],[".","p","p","p","p","p",".","."],[".","p","p","B","p","p",".","."],[".","p","B","R","B","p",".","."],[".","p","p","B","p","p",".","."],[".","p","p","p","p","p",".","."],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."]];

numRookCaptures(board);