import {
  horizontalLines,
  verticalLines,
  starterMap,
  plotHorizontal,
  plotVertical,
  countOverlapping,
} from './common.js'

let map = [...starterMap]
map = plotHorizontal(horizontalLines, map)
map = plotVertical(verticalLines, map)

const overlapping = countOverlapping(map)

console.log('ANSWER', overlapping)
