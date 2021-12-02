import { readFileSync } from 'fs'

const depths = readFileSync('./input.text', { encoding: 'utf-8' })
  .split('\n')
  .map((depth) => parseInt(depth))

const increases = depths.filter(
  (depth, index, allDepths) =>
    allDepths[index - 1] && depth > allDepths[index - 1]
)

console.log('ANSWER', increases.length)
