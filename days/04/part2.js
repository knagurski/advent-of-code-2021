import { calls, boards, sumBoard, boardWins } from './common.js'

let markedBoards = [...boards]
let lastWinningBoard
let lastWinningCall
const winningBoards = []

for (const call of calls) {
  for (let boardIndex = 0; boardIndex < markedBoards.length; boardIndex++) {
    if (winningBoards.includes(boardIndex)) continue

    const markedBoard = markedBoards[boardIndex].map((row) => {
      const markIndex = row.indexOf(call)
      if (markIndex >= 0) row[markIndex] = 'x'

      return row
    })

    if (boardWins(markedBoard)) {
      lastWinningBoard = markedBoard
      lastWinningCall = call
      winningBoards.push(boardIndex)
      continue
    }

    markedBoards[boardIndex] = markedBoard
  }
}

console.log('ANSWER', lastWinningCall * sumBoard(lastWinningBoard))
