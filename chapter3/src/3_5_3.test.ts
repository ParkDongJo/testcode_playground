import { expect, test } from 'vitest'

const add = (a: number, b: number) => {
  if (a < 0 || a > 100) {
    throw new Error('a must be between 0 and 100')
  }
  if (b < 0 || b > 100) {
    throw new Error('b must be between 0 and 100')
  }
  const sum = a + b
  if (sum > 100) {
    return 100;
  }
  return sum
}

test('add', () => {
  expect(() => add(10, 40)).not.toThrow()
  expect(() => add(130, 130)).toThrow()
  expect(() => add(130, 40)).toThrow('a must be between 0 and 100')
})
