import { getMostCommonBit, lines } from './common.js'

const reduce = (candidates, useMost, position = 0) => {
  const mostCommonBit = getMostCommonBit(candidates, position)
  const targetBit = useMost ? mostCommonBit : !mostCommonBit + 0

  const reduced = candidates.filter(
    (candidate) => parseInt(candidate[position]) === targetBit
  )

  if (reduced.length === 1) {
    return reduced[0]
  }

  return reduce(reduced, useMost, position + 1)
}

const oxygenRating = parseInt(reduce(lines, true), 2)
const scrubberRating = parseInt(reduce(lines, false), 2)

console.log('ANSWER', oxygenRating * scrubberRating)
