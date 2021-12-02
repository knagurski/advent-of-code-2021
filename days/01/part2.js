import { readFileSync } from 'fs'

const depths = readFileSync('./input.text', { encoding: 'utf-8' })
  .split('\n')
  .map((depth) => parseInt(depth))
  .reduce((chunks, depth, index, allDepths) => {
    if (allDepths[index - 1] && allDepths[index + 1]) {
      return [...chunks, allDepths[index - 1] + depth + allDepths[index + 1]]
    }
    return chunks
  }, [])

const increases = depths.filter(
  (depth, index, allDepths) =>
    allDepths[index - 1] && depth > allDepths[index - 1]
)

console.log('ANSWER', increases.length)
