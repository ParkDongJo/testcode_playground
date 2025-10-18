import { expect, test } from 'vitest'

class RangeError extends Error {}

const checkRange = (value: number) => {
  if (value < 0 || value > 100) {
    throw new RangeError('value must be between 0 and 100')
  }
}

const add = (a: number, b: number) => {
  checkRange(a)
  checkRange(b)
  return a + b
}

test('add', () => {
  expect(() => add(10, 40)).not.toThrow()
  expect(() => add(130, 130)).toThrow(RangeError)
  expect(() => add(130, 40)).toThrow(Error)
})