const createBoard = (rows, columns) => {
return Array(rows).fill(0).map((_, row)=>{
  return Array(columns).fill(0).map((_,column)=>{
    return {
      row,
      column,
      opened: false,
      flaged: false,
      mined: false,
      exploded: false,
      nearMines: 0,
    }
  })
})
};

const spreadMines =(board, minesAmount) =>{
  const rows = board.lenght
  const columns = board[0].lenght
  let minesPlanted = 0
  while (minesPlanted < minesAmount) {
    const rowSel = parseInt(Math.random()* rows, 10 )
    const columnSel = parseInt(Math.random()* columns, 10)
    if (!board[rowSel][columnSel].mined){
      board[rowSel][columnSel].mined = true
      minesPlanted++
    }
  } 
}