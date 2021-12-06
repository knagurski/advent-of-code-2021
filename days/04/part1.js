import { calls, boards, sumBoard, boardWins } from './common.js'

let markedBoards = [...boards]
let winningBoard
let winningCall

callsLoop: for (const call of calls) {
  for (let boardIndex = 0; boardIndex < markedBoards.length; boardIndex++) {
    const markedBoard = markedBoards[boardIndex].map((row) => {
      const markIndex = row.indexOf(call)
      if (markIndex >= 0) row[markIndex] = 'x'

      return row
    })

    if (boardWins(markedBoard)) {
      winningBoard = markedBoard
      winningCall = call
      break callsLoop
    }

    markedBoards[boardIndex] = markedBoard
  }
}

console.log('ANSWER', winningCall * sumBoard(winningBoard))
