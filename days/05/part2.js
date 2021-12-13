import {
  horizontalLines,
  verticalLines,
  starterMap,
  plotHorizontal,
  plotVertical,
  countOverlapping,
  diagonalLines,
  debugMap,
} from './common.js'

let map = [...starterMap]
map = plotHorizontal(horizontalLines, map)
map = plotVertical(verticalLines, map)

// plot diagonal lines
const plotPoint = (start, end) => {
  map[start[1]][start[0]]++

  if (start[0] !== end[0] || start[1] !== end[1]) {
    const nextPoint = [
      start[0] < end[0] ? start[0] + 1 : start[0] - 1,
      start[1] < end[1] ? start[1] + 1 : start[1] - 1,
    ]

    plotPoint(nextPoint, end)
  }
}

for (const line of diagonalLines) {
  plotPoint(line[0], line[1])
}

const overlapping = countOverlapping(map)

console.log('ANSWER', overlapping)
