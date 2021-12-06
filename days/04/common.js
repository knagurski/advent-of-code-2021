import { readFileSync } from 'fs'

const [rawCalls, ...rawBoards] = readFileSync('./input.txt', {
  encoding: 'utf8',
}).split('\n\n')

export const calls = rawCalls.split(',').map((call) => parseInt(call))

export const boards = rawBoards.map((rawBoard) =>
  rawBoard.split('\n').map((row) =>
    row
      .trim()
      .split(/\s+/)
      .map((num) => parseInt(num))
  )
)

export const boardWins = (boardRows) =>
  boardRows.some((row) => row.join('') === 'xxxxx') ||
  boardRows[0].some(
    (num, index) => num === 'x' && boardRows.every((row) => row[index] === 'x')
  )

export const sumBoard = (board) =>
  board.reduce(
    (boardSum, row) =>
      boardSum +
      row.filter((num) => num !== 'x').reduce((rowSum, num) => rowSum + num, 0),
    0
  )
