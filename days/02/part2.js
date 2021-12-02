import { readFileSync } from 'fs'

const instructions = readFileSync('./input.text', { encoding: 'utf-8' }).split(
  '\n'
)

const position = instructions.reduce(
  ([depth, position, aim], instruction) => {
    let [direction, distance] = instruction.split(' ')
    distance = parseInt(distance)

    switch (direction) {
      case 'up':
        return [depth, position, aim - distance]
      case 'down':
        return [depth, position, aim + distance]
      case 'forward':
        return [depth + aim * distance, position + distance, aim]
    }

    return [depth, position, aim]
  },
  [0, 0, 0]
)

console.log('ANSWER', position[0] * position[1])
