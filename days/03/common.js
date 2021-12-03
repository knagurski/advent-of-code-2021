import { readFileSync } from 'fs'

export const lines = readFileSync('./input.txt', { encoding: 'utf-8' }).split(
  '\n'
)

export const getMostCommonBit = (input, position) =>
  Math.round(
    input.map((num) => parseInt(num[position])).filter((num) => !!num).length /
      input.length
  )
