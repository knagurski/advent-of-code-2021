import { readFileSync } from 'fs'

const instructions = readFileSync('./input.text', { encoding: 'utf-8' }).split(
  '\n'
)

const position = instructions.reduce(
  ([depth, position], instruction) => {
    let [direction, distance] = instruction.split(' ')
    distance = parseInt(distance)

    switch (direction) {
      case 'up':
        return [depth - distance, position]
      case 'down':
        return [depth + distance, position]
      case 'forward':
        return [depth, position + distance]
    }

    return [depth, position]
  },
  [0, 0]
)

console.log('ANSWER', position[0] * position[1])
