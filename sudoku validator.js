//https://www.codewars.com/kata/529bf0e9bdf7657179000008

function columnUnique(board) { // велосипед, проверит каждый столбец на уникальность.
    let [columnCount, AllCount, elementCount, columnAr] = [0, 0, 0, []]
    while(AllCount < (board.length-1)*9) {
      columnAr.push(board[columnCount][elementCount])
      columnCount++ // заполняем массив в стольб
      if(columnCount == board.length) {
        if(new Set(columnAr).size != columnAr.length) return false // проверка уникальности массива
        else {
          elementCount++
          [columnCount,columnAr] = [0,[]] // если проверка пройдета счетчик элемента инкрементируется, счетчик столбца и массив столбца обнуляются
        }
      }
      AllCount++
    }
    return true
  }
  
  function cubeUnique(board) { // велосипед, проверит каждый квадрат 3x3 на уникальность.
    const boardClone = board.slice()
    let [CubeArr, i, iteration] = [[],0, 0]
    while(iteration < board.length* board[board.length - 1].length) {
       if(boardClone[0].length === 0 && boardClone[1].length === 0 && boardClone[2].length === 0) {
         boardClone.splice(0,3)
       } else {
         if(CubeArr.length == 9) {
          if(new Set(CubeArr).size != CubeArr.length) return false
          else {
            CubeArr.length = 0
            i = 0
          }
        }
        if(i>2) i = 0
        CubeArr.push(boardClone[i].pop())
         i++
       }
      iteration++
    }
    return true
  }
  
  function validSolution(board) {
    for(i of board) {
      if(new Set(i).size != i.length) return false // проверка уникальности строки
      for(j of i) if(j <= 0 || j > 9) return false // проверка на общую корректность значений внутри массивов   
    }
    return columnUnique(board) && cubeUnique(board)
}