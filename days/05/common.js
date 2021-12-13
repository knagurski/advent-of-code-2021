import { readFileSync } from 'fs'

export const lines = readFileSync('./input.txt', { encoding: 'utf8' })
  .split('\n')
  .map((line) =>
    line
      .split(' -> ')
      .map((coordinate) =>
        coordinate.split(',').map((part) => parseInt(part.trim()))
      )
  )

export const verticalLines = lines.filter(([[x1], [x2]]) => x1 === x2)
export const horizontalLines = lines.filter(([[, y1], [, y2]]) => y1 === y2)
export const diagonalLines = lines.filter(
  (line) => !verticalLines.includes(line) && !horizontalLines.includes(line)
)

export const maxX = lines.reduce(
  (max, line) => Math.max(max, ...line.map(([x]) => x)),
  0
)

export const maxY = lines.reduce(
  (max, line) => Math.max(max, ...line.map(([, y]) => y)),
  0
)

export const starterMap = [...new Array(maxY + 1)].map(() =>
  [...new Array(maxX + 1)].fill(0)
)

export const debugMap = (map) =>
  console.log(
    map
      .map((row) => row.join(''))
      .join('\n')
      .replaceAll('0', '.')
  )

export const plotVertical = (lines, map) => {
  for (const line of lines) {
    const x = line[0][0]
    const startY = Math.min(line[0][1], line[1][1])
    const endY = Math.max(line[0][1], line[1][1])

    for (let y = startY; y <= endY; y++) {
      map[y][x]++
    }
  }

  return map
}

export const plotHorizontal = (lines, map) => {
  for (const line of lines) {
    const y = line[0][1]
    const startX = Math.min(line[0][0], line[1][0])
    const endX = Math.max(line[0][0], line[1][0])

    for (let x = startX; x <= endX; x++) {
      map[y][x]++
    }
  }

  return map
}

export const countOverlapping = (map) =>
  map.reduce(
    (overlaps, row) => overlaps + row.filter((pos) => pos > 1).length,
    0
  )
