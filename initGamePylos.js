const board = []
const marbles = []
const row = 4;
const column = 4;


function initBoard(row){
  for(let i = 0; i < row + 1; i++){
    board[i] = []
  }
  return board;
}

console.log('board is initialised: ',initBoard(row))

function fillAllLevelBoard(board, rowLevelBoard, columnLevelBoard){
  for(let i = 0; i <= board.length; i++){
    for(let j = 0; j <= rowLevelBoard; j++){
      board[i][j] = []
      for(let k = 0; k <= columnLevelBoard; k++){
        board[i][j][k] = 0
      }
    }
    rowLevelBoard = rowLevelBoard - 1
    columnLevelBoard = columnLevelBoard - 1
  }
  
  return board
}

console.log('all level board feel: ',fillAllLevelBoard(board, row, column));