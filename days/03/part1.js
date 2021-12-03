import { getMostCommonBit, lines } from './common.js'

export const mostCommonBits = lines[0]
  .split('')
  .map((_, index) => getMostCommonBit(lines, index))

export const leastCommonBits = mostCommonBits.map((bit) => !bit + 0)

const mostCommonBitsAsInt = parseInt(mostCommonBits.join(''), 2)
const leastCommonBitsAsInt = parseInt(leastCommonBits.join(''), 2)

console.log('PART 1', mostCommonBitsAsInt * leastCommonBitsAsInt)
